import React, {Component} from 'react'
import './battle-field-footer.css';
import ItemList from "../color-list";
import GameState from "../../../consts/game-state";
const {STARTED} = GameState;

export default class BattleFieldFooter extends Component {

    render() {
        const {state} = this.props;
        const content = state.game.mode === STARTED ? <ItemList field = {state.game.field}/>  : null;
        return (
            <div className ="battle-field-footer">
                {content}
            </div>
        );
    }
}


