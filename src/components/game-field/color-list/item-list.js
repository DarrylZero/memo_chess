import React, {Component} from 'react'
import './color-list.css';
import CellColor from "../../../consts/cell-color";

import {getStatistics} from "../../../datautils/stat-utils";


export default class ItemList extends Component {

    render() {
        const {field} = this.props;
        const statistics = getStatistics(field);
        const items = statistics.statistics.map((
            {
                color,
                total,
                open,
            }) => {
            const colorStyle = CellColor.colorStyle(color);
            return <tr><td className={colorStyle}/><td>{total}</td><td>{open}</td></tr>;
        });

        return (
            <div className="color_list">
                <ol>
                    <table width="300" border="2">
                        <tr><th>Color</th><th>Total</th><th>Open</th></tr>
                        {items}
                        <tr><th/><th>{statistics.totals.total}</th><th>{statistics.totals.open}</th></tr>
                    </table>
                </ol>
            </div>
        );
    }

/*
    getStatistics = (field) => {
        const map = new Map(); // key = color
        for (let rowIndex = 0; rowIndex < field.length; rowIndex++) {
            const row = field[rowIndex];
            for (let colIndex = 0; colIndex < row.length; colIndex++) {
                const cell = row[colIndex];


                if (!map.get(cell.color)) {
                    const initialValue = {
                        total: 0,
                        open: 0
                    };

                    map.set(cell.color, initialValue)
                }
                const colorItem = map.get(cell.color);
                colorItem.total = colorItem.total + 1;


                if (cell.status === CELL_STATUS_REVEALED) {
                    colorItem.open = colorItem.open + 1;
                }
            }
        }

        const statistics = [];
        for (const [key, value] of map) {
            statistics.push({...value, color: key});
        }


        const totals = statistics.reduce((prev, current) => {
            return {
                color: null,
                total: prev.total + current.total,
                open: prev.open + current.open,
            }
        }, {
            color: null,
            total: 0,
            open: 0
        });


        return {
            statistics,
            totals
        };
    };
*/

}


