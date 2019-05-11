import React, {Component} from 'react'
import FieldRow from '../../field-row'
import './battle-field.css';
import FieldCell from "../../field-cell";
import GameField from "../game-field";


export default class BattleField extends Component {


    render() {

        const {state, dispatch} = this.props;
        const field = state.game.field;
        return (
            <div>
                {this.rows(field)};
            </div>
        );
    }

    rows = (field) => {
        const {onCellClick, dispatch} = this.props;
        let rows = [];
        for (let rowIndex = 0; rowIndex < field.length; rowIndex++) {
            rows.push(<FieldRow
                row={field[rowIndex]}
                rowIndex={rowIndex}
                dispatch={dispatch}
                onCellClick={onCellClick}
            />)
        }
        return rows;
    };



}


