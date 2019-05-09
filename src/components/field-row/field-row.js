import React, {Component} from 'react'
import './field-row.css'
import FieldCell from "../field-cell";

export default class FieldRow extends Component {

    render() {
        const {row, rowIndex, onCellClick} = this.props;
        var cols = [];
        for (var colIndex = 0; colIndex < row.length; colIndex++) {
            cols.push(<FieldCell
                rowIndex={rowIndex}
                colIndex={colIndex}
                onCellClick={onCellClick}
            />)
        }
        return cols;
    }

}