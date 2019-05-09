import React, {Component} from 'react'
import FieldRow from '../field-row'
import './game_field.css';
import CellColor from "../consts/cell-color";


export default class GameField extends Component {

    render() {
        const field = this.props.field;

        return (
            <div>
                <button type="button" color="red" id="button_to_debug" className="debugbutton" onClick={(event) => {
                    // event.target.
                    // event.target.setTextContent(CellColor.randomColor());
                    console.log('random color = ' + CellColor.randomColor());

                }}>
                    </button><br/>
                {this.rows(field)};
            </div>
        );
    }

    rows(field) {
        const onCellClick = this.props.onCellClick;

        var rows = [];
        // rows.push(<button className=""/>)
        for (var rowIndex = 0; rowIndex < field.length; rowIndex++) {
            rows.push(<FieldRow
                row={field[rowIndex]}
                rowIndex={rowIndex}
                onCellClick={onCellClick}
                debug={this.props.debug}
            />)
        }
        return rows;
    };

}


