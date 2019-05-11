import React, {Component} from 'react'
import FieldRow from '../field-row'
import './game_field.css';
import FieldCell from "../field-cell";


export default class GameField extends Component {

    render() {
        const {field, onDebugButtonClick, colorToFind} = this.props;

        return (
            <div>
                <button type="button"
                        color="red"
                        id="rebuild_state"
                        className="game_field_debug_button"
                        onClick={onDebugButtonClick}>
                    Rebuild state
                </button>
                <br/>
                <label className="game_field_label">color to find is --- {colorToFind}</label>

                {this.rows(field)};
            </div>
        );
    }





    rows = (field) => {
        const onCellClick = this.props.onCellClick;

        let rows = [];
        // rows.push(<button className=""/>)
        for (let rowIndex = 0; rowIndex < field.length; rowIndex++) {
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


