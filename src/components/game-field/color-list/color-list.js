import React, {Component} from 'react'
import './color-list.css';
import Player from "../../../consts/player";
import CellColor from "../../../consts/cell-color";

export default class ColorList extends Component {

    render() {
        const {field} = this.props;
        const statistics = this.getStatistics(field);

        const totals = statistics.reduce((prev, current) => {
            return {
                color: null,
                total: prev.total + current.total,
                hidden: prev.hidden + current.hidden,
                you: prev.you + current.you,
                opponent: prev.opponent + current.opponent
            }
        }, {
            color: null,
            total: 0,
            hidden: 0,
            you: 0,
            opponent: 0
        });

        const items = statistics.map((
            {
                color,
                total,
                hidden,
                you,
                opponent
            }) => {
            const colorStyle = CellColor.colorStyle(color);
            return (
                <tr>
                    <td className={colorStyle}/>
                    <td>{total}</td>
                    <td>{hidden}</td>
                    <td>{you}</td>
                    <td>{opponent}</td>
                </tr>
            );
        });

        return (
            <div className="color_list">
                <ol>
                    <table border="2">
                        <tr>
                            <th>Color</th>
                            <th>Total</th>
                            <th>Hidden</th>
                            <th>You</th>
                            <th>Opponent</th>
                        </tr>
                        {items}
                        <tr>
                            <th> </th>
                            <th>{totals.total}</th>
                            <th>{totals.hidden}</th>
                            <th>{totals.you}</th>
                            <th>{totals.opponent}</th>
                        </tr>
                    </table>
                </ol>
            </div>
        );
    }

    // status: DEFAULT_CELL_STATUS, color: BLUE, takenBy: null
    getStatistics = (field) => {
        const map = new Map(); // key = color
        for (let rowIndex = 0; rowIndex < field.length; rowIndex++) {
            const row = field[rowIndex];
            for (let colIndex = 0; colIndex < row.length; colIndex++) {
                const cell = row[colIndex];


                if (!map.get(cell.color)) {
                    const initialValue = {
                        [Player.YOU]: 0,
                        [Player.OPPONENT]: 0,
                        hidden: 0,
                        total: 0
                    };

                    map.set(cell.color, initialValue)
                }
                const colorItem = map.get(cell.color);
                colorItem.total = colorItem.total + 1;

                if (!cell.takenBy) {
                    colorItem.hidden = colorItem.hidden + 1;
                } else {
                    colorItem[cell.takenBy] = colorItem[cell.takenBy] + 1;
                }
            }
        }

        const result = [];
        for (const [key, value] of map) {
            result.push({...value, color: key});
        }


        return result;
    };

}


