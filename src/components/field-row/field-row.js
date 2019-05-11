import React, {Component} from 'react'
import FieldCell from "../field-cell";
import AppActions from "../actions/app-actions";
import './field-row.css'

export default class FieldRow extends Component {

    render() {
        const {row, rowIndex, onCellClick, debug, dispatch} = this.props;
        const cols = [];
        for (let colIndex = 0; colIndex < row.length; colIndex++) {
            const col = colIndex;
            const cell = row[colIndex];
            cols.push(<FieldCell
                key={`${colIndex}_${rowIndex}`}
                colIndex={colIndex}
                rowIndex={rowIndex}
                cell={cell}
                onCellClick={() => dispatch(AppActions.cellClick(colIndex, rowIndex))}
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