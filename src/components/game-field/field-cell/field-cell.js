import React, {Component} from 'react'
import './field-cell.css'
import CellStatus from "../../../consts/cell-status";
import CellColor from "../../../consts/cell-color";

const {CELL_STATUS_CLOSED} = CellStatus;

export default class FieldCell extends Component {

    render() {
        const {colIndex, rowIndex, onCellClick, cell: {status, color, letter}} = this.props;
        const className = this._getClassName(status, color);
        return <button className={className} onClick={() => onCellClick(colIndex, rowIndex)}/>
    }

    _getClassName = (status, color) => {
        return `quadrant btn ${(status === CELL_STATUS_CLOSED) ? 'btn-light' : CellColor.colorStyle(color)}`;
    };

}