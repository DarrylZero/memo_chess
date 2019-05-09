import React, {Component} from 'react'
import FieldRow from '../field-row'

export default class GameField extends Component {

    render() {
        const field = this.props.field;

        return (
            <div>
                {this.rows(field)};
            </div>
        );
    }

    rows(field) {
        const onCellClick = this.props.onCellClick;

        var rows = [];
        for (var rowIndex = 0; rowIndex < field.length; rowIndex++) {
            rows.push(<FieldRow row={field[rowIndex]} rowIndex={rowIndex} onCellClick={onCellClick} />)
        }
        return rows;
    };

}


