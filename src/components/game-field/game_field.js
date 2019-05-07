import React, {Component} from 'react'
import FieldCell from '../field-cell'
import FieldRow from '../field-row'

export default class GameField extends Component {

    render() {
        const field = this.props.field;

        return (
            <div>
                <ul>
                    {this.rows(field)};
                </ul>
            </div>
        );
    }

    rows(field) {
        var data = [];
        for (var rowIndex = 0; rowIndex < field.length; rowIndex++) {
            // const aRow = field[rowIndex];
            data.push(<FieldRow row={field[rowIndex]} index={rowIndex}/>)
        }
        return data;
    };


}


