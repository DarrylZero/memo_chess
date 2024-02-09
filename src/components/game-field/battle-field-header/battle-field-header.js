import React, {Component} from 'react'
import './battle-field-header.css';
import AppActions from "../../../actions/app-actions";
import GameState from "../../../consts/game-state";
import CellColor from "../../../consts/cell-color";
const {CREATED, STARTED} = GameState;

export default class BattleFieldHeader extends Component {
    render() {
        const {state, dispatch} = this.props;
        const {mode, colorToFind} = state.game;
        const caption = mode === CREATED ? "start" : "restart";
        const buttonStyle = mode === STARTED ? CellColor.colorStyle(colorToFind) : '';
        const style = `quadrant btn ${buttonStyle}`;
        const buttonColorToFindCaption = mode === STARTED ? "Color to find" : "";

        return (
            <div className ="battle-field-header">
                <button type="button" className={style}>{buttonColorToFindCaption}</button>


                <button type="button"
                        onClick={() => dispatch(AppActions.restart())}
                        className="btn quadrant btn-success">
                    {caption}
                </button>
            </div>
        );
    }
}


