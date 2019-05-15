import React, {Component} from 'react'
import './game-field.css';
import BattleFieldHeader from "./battle-field-header";
import BattleFieldFooter from "./battle-field-footer";
import BattleField from "./battle-field";
import GameOver from "./game-over";

export default class GameField extends Component {

    render() {
        const {state, dispatch} = this.props;
        const gameOver = state.game.winInfo ? <GameOver/> : null;

        return (
            <div className="game_field">
                <BattleFieldHeader state={state} dispatch={dispatch}/>
                <BattleField state={state} dispatch={dispatch}/>
                <BattleFieldFooter state={state} dispatch={dispatch}/>
                {gameOver}
            </div>


        );
    };
};





