import React, {Component} from 'react'
import './field-cell.css'
import CellStatus from "../consts/cell-status";
import {HeaderButtons} from "../header/header";
const {DEFAULT_CELL_STATUS, CELL_STATUS_CLOSED, CELL_STATUS_REVEALED} = CellStatus;

export default class FieldCell extends Component {

    render() {
        const {colIndex, rowIndex, onCellClick, cellData} = this.props;
        const data = `col:${colIndex} row:${rowIndex}`;

        return (
                <button
                    className={this._getClassName(cellData.status)}
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
            default: {
                console.log(`unknown status ${status}`);
            }
        }
    }

}