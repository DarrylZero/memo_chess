import React, {Component} from 'react'
import './field-cell.css'

export default class FieldCell extends Component {

    render() {
        const {colIndex, rowIndex, onCellClick} = this.props;
        const data = `col:${colIndex} row:${rowIndex}`;

        return (
            <div>
                <h1 onClick={() => onCellClick}>{data}</h1>
            </div>
        )
    }

}