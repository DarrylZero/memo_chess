import React, {Component} from 'react'
import './field-cell.css'

export default class FieldCell extends Component {

    render() {
        const {colIndex, rowIndex, onCellClick, cellData} = this.props;
        const data = `col:${colIndex} row:${rowIndex}`;


        return (
            <div>
                <button onClick={() => onCellClick(colIndex, rowIndex)}>{data}</button>
            </div>
        )
    }

}