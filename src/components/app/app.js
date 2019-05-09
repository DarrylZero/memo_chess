import React, {Component} from 'react';
import './app.css';
import GameField from './../game-field'
import GameMode from '../game-application-state/game-mode'
import Header from '../header'
import GameSettings from "../game-settings";
import {HeaderButtons} from '../header/header'
import {DEFAULT_AI_MODE} from '../game-settings/ai-mode'
import GameAbout from "../component-about/component-about";


export default class App extends Component {

    state = {
        settings: {
            aiMode: DEFAULT_AI_MODE
        },

        game: {
            mode: GameMode.DEFAULT,
            field: [
                [{status: 20}, {status: 20}, {status: 20}, {status: 20}],
                [{status: 20}, {status: 20}, {status: 20}, {status: 20}],
                [{status: 20}, {status: 20}, {status: 20}, {status: 20}],
                [{status: 20}, {status: 20}, {status: 20}, {status: 20}],
                [{status: 20}, {status: 20}, {status: 20}, {status: 20}],
                [{status: 20}, {status: 20}, {status: 20}, {status: 20}]
            ]
        },

    };

    render() {
        return (
            <div className="App">
                <Header onPaneChanged={this.paneChanged}/>
                {this.getContent()}
            </div>
        );
    }

    cellClick(colIndex, rowIndex) {
        console.log(`col ${colIndex}, row ${rowIndex}`);
    }

    getContent = () => {
        switch (this.state.game.mode) {
            case GameMode.ON : {
                return <GameField field={this.state.game.field} onCellClick={this.cellClick}/>;
            }

            case GameMode.SETTINGS: {
                return <GameSettings settings={this.state.settings}/>;
            }

            case GameMode.ABOUT : {
                return <GameAbout/>;
            }

            default: {
                return <h2>Unexpected error</h2>
            }
        }
    };

    paneChanged = (paneId) => {
        const newState = {...this.state};
        switch (paneId) {
            case  HeaderButtons.BUTTON_GAME : {
                newState.game.mode = GameMode.ON;
                break;
            }

            case  HeaderButtons.ABOUT_BUTTON : {
                newState.game.mode = GameMode.ABOUT;
                break;
            }

            case  HeaderButtons.BUTTON_SETTINGS : {
                newState.game.mode = GameMode.SETTINGS;
                break;
            }

            default : {
                console.log(`Pane ${paneId} is not known`)
            }
        }
        this.setState(newState);
    };

};
