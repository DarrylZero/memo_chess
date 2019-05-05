import React, {Component} from 'react';
import './app.css';
import GameField from './../game-field'
import GameMode from '../settings/game-mode'
import gameState from '../game-state'
import Header from '../header'
import GameOver from "../game-over";


export default class App extends Component {


    constructor() {
        super();
        this.gameState = gameState;
        this.getContent = function () {

            switch (this.gameState.gameMode) {
                case GameMode.GAME_SETTINGS: {
                    return <GameOver/>;
                }

                case GameMode.GAME_ON : {
                    return <GameField/>;
                }

                default: {
                    return (
                        <div className="App">
                            <h2>Unexpected error</h2>
                        </div>
                    );
                }
            }

        };
    }

    render() {
        return (
            <div className="App">
                <Header/>
                {this.getContent()}
            </div>
        );
    }

};
