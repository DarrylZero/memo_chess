import React, {Component} from 'react'
import './field-cell.css'
import CellStatus from "../consts/cell-status";
const {CELL_STATUS_CLOSED, CELL_STATUS_REVEALED, CELL_STATUS_TEMPORARILY_SHOWN} = CellStatus;

export default class FieldCell extends Component {

    render() {
        const {colIndex, rowIndex, onCellClick, cell:{status, color}} = this.props;
        const data = (status === CELL_STATUS_CLOSED) ? '' : `${color}`;
        return (
                <button
                    className={this._getClassName(status)}
                    onClick={() => onCellClick(colIndex, rowIndex)}>{data}
                </button>
        )
    }



    _getClassName = (status) => {
        switch (status) {
            case CELL_STATUS_REVEALED : {
                return "quadrant btn btn-info";

            }

            case CELL_STATUS_CLOSED : {
                return "quadrant btn btn-light";
            }

            case CELL_STATUS_TEMPORARILY_SHOWN: {
                return "quadrant btn btn-light";
            }

            default: {
                console.log(`unknown status ${status}`);
            }
        }
    }

}