import React, {Component} from 'react';
import './app.css';
import GameField from './../game-field'
import GameMode from '../game-application-state/game-mode'
import Header from '../header'
import GameSettings from "../game-settings";
import {HeaderButtons} from '../header/header'
import GameAbout from "../component-about/component-about";


export default class App extends Component {

    state = {
        settings: {
            aiMode: aiMode
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

    getContent = () => {
        switch (this.state.game.mode) {
            case GameMode.SETTINGS: {
                return <GameSettings settings={this.state.settings}/>;
            }

            case GameMode.ON : {
                return <GameField field={this.state.game.field}/>;
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
        switch (paneId) {

            case  HeaderButtons.ABOUT_BUTTON : {
                this.setState({
                    game: {
                        mode: GameMode.ABOUT
                    }
                });
                break;
            }

            case  HeaderButtons.BUTTON_SETTINGS : {
                this.setState({
                    game: {
                        mode: GameMode.SETTINGS
                    }
                });
                break;
            }

            case  HeaderButtons.BUTTON_GAME : {
                this.setState({
                    game: {
                        mode: GameMode.ON
                    }
                });
                break;
            }

            default : {
                console.log(`Pane ${paneId} is not known`)
            }
        }
    };


    render() {
        return (
            <div className="App">
                <Header onPaneChanged={this.paneChanged}/>
                {this.getContent()}
            </div>
        );
    }

};
