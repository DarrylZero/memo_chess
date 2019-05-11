import React, {Component} from 'react'
import './battle-field-header.css';
import AppActions from "../../actions/app-actions";

export default class BattleFieldHeader extends Component {
    render() {
        const {state, dispatch} = this.props;

        return (
            <div className ="battle-field-header">
                <button type="button"
                        color="red"
                        id="rebuild_state"
                        onClick={() => dispatch(AppActions.restart())}
                        className="btn game_field_debug_button">
                    Rebuild state
                </button>
            </div>
        );
    }
}


