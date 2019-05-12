import React, {Component} from 'react'
import './battle-field-header.css';
import AppActions from "../../../actions/app-actions";
import GameState from "../../../consts/game-state";
import CellColor from "../../../consts/cell-color";
const {CREATED} = GameState;

export default class BattleFieldHeader extends Component {
    render() {
        const {state, dispatch} = this.props;
        const {mode, colorToFind} = state.game;
        const caption = mode === CREATED ? "start" : "restart";
        const style = `quadrant btn ${CellColor.colorStyle(colorToFind)}`;

        return (
            <div className ="battle-field-header">
                <label className="next_move_class">{"next move is by " + state.game.moveTurn.toUpperCase()}</label>

                <button type="button" className={style}>Color to find</button>


                <button type="button"
                        onClick={() => dispatch(AppActions.restart())}
                        className="btn quadrant btn-success">
                    {caption}
                </button>
            </div>
        );
    }
}


