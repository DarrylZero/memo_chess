import React, {Component} from 'react'
import './game-field.css';
import BattleFieldHeader from "./battle-field-header";
import BattleFieldFooter from "./battle-field-footer";
import BattleField from "./battle-field";
import GameOver from "./game-over";

export default class GameField extends Component {

    render() {
        const {field, onCellClick, colorToFind, onDebugButtonClick} = this.props;

        const gameOver = <GameOver/>;

        return (
            <div className="game_field">
                <BattleFieldHeader/>
                <BattleField field={field}
                             onCellClick={onCellClick}
                             colorToFind={colorToFind}
                             onDebugButtonClick={onDebugButtonClick}/>
                <BattleFieldFooter/>
                {gameOver}
            </div>


        );
    };
};





