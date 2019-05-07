import React, {Component} from 'react'
import './field-row.css'

export default class FieldRow extends Component {

    render() {
        const row = this.props.row;
        const index = this.props.index;
        const data = `Kind A cell with index ${index} of length ${row.length}`;
        return <h1>{data}</h1>
    }

}