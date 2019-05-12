import React, {Component} from 'react'
import './battle-field-header.css';
import AppActions from "../../actions/app-actions";

const START = "start";
export default class BattleFieldHeader extends Component {
    render() {
        const {state, dispatch} = this.props;
        return (
            <div className ="battle-field-header">
                <label className="next_move_class">{"next to move is " + state.game.moveTurn.toUpperCase()}</label>
                <button type="button"
                        onClick={() => dispatch(AppActions.restart())}
                        className="btn btn-success">
                    {START}
                </button>
            </div>
        );
    }
}


