import React, {Component} from 'react';
import './app.css';
import GameField from './../game-field'
import GameMode from '../game-application-state/game-mode'
import Header from '../header'
import GameSettings from "../game-settings";
import applicationState from '../game-application-state/application-state.js'


export default class App extends Component {


    constructor() {
        super();
        this.state = applicationState;

        this.getContent = function () {
            switch (this.state.game.mode) {
                case GameMode.SETTINGS: {
                    return <GameSettings/>;
                }

                case GameMode.ON : {
                    return <GameField/>;
                }

                default: {
                    return (
                       <h2>Unexpected error</h2>
                    );
                }
            }

        };
    }

    render() {
        return (
            <div className="App">
                <Header onPaneChanged={this.state.paneChanged.bind(this.state)} />
                {this.getContent()}
            </div>
        );
    }

};
