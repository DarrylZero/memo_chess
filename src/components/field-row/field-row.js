import React, {Component} from 'react'
import FieldCell from "../field-cell";
import './field-row.css'

export default class FieldRow extends Component {

    render() {
        const {row, rowIndex, onCellClick, debug} = this.props;
        const cols = [];
        for (let colIndex = 0; colIndex < row.length; colIndex++) {
            const col = colIndex;
            const cell = row[colIndex];
            cols.push(<FieldCell
                colIndex={colIndex}
                rowIndex={rowIndex}
                cell={cell}
                onCellClick={() => onCellClick(col, rowIndex)}
                debug={debug}
            />)
        }
        return (
            <div className="field_cells">
               {cols}
            </div>
        );
    }

}