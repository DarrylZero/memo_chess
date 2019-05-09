import React, {Component} from 'react';
import './app.css';
import GameField from './../game-field'
import GameMode from '../consts/game-mode'
import Header from '../header'
import GameSettings from "../game-settings";
import {HeaderButtons} from '../header/header'
import {DEFAULT_AI_MODE} from '../consts/ai-mode'
import GameAbout from "../component-about/component-about";
import CellStatus from "../consts/cell-status";
import DebugFlags from "../consts/debug-flags";

const {DEFAULT_CELL_STATUS, CELL_STATUS_CLOSED, CELL_STATUS_REVEALED} = CellStatus;
const {DEFAULT_GAME_MODE} = GameMode;
const {DEBUG_SHOW_INDEXES} = DebugFlags;

export default class App extends Component {

    state = {
        debug: {
            flags: {
                // [DEBUG_SHOW_INDEXES]:0
            }
        },

        settings: {
            aiMode: DEFAULT_AI_MODE
        },

        game: {
            mode: DEFAULT_GAME_MODE,
            field: [
                [{status: DEFAULT_CELL_STATUS}, {status: DEFAULT_CELL_STATUS}, {status: DEFAULT_CELL_STATUS}, {status: DEFAULT_CELL_STATUS}],
                [{status: DEFAULT_CELL_STATUS}, {status: DEFAULT_CELL_STATUS}, {status: DEFAULT_CELL_STATUS}, {status: DEFAULT_CELL_STATUS}],
                [{status: DEFAULT_CELL_STATUS}, {status: DEFAULT_CELL_STATUS}, {status: DEFAULT_CELL_STATUS}, {status: DEFAULT_CELL_STATUS}],
                [{status: DEFAULT_CELL_STATUS}, {status: DEFAULT_CELL_STATUS}, {status: DEFAULT_CELL_STATUS}, {status: DEFAULT_CELL_STATUS}],
                [{status: DEFAULT_CELL_STATUS}, {status: DEFAULT_CELL_STATUS}, {status: DEFAULT_CELL_STATUS}, {status: DEFAULT_CELL_STATUS}],
                [{status: DEFAULT_CELL_STATUS}, {status: DEFAULT_CELL_STATUS}, {status: DEFAULT_CELL_STATUS}, {status: DEFAULT_CELL_STATUS}],
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
    };

    cellClick = (colIndex, rowIndex) => {
        const newState = {...this.state};
        const element = newState.game.field[rowIndex][colIndex];
        console.log(`col: ${colIndex}, row: ${rowIndex}, element: ${element.status}`);

        const oldStatus = newState.game.field[rowIndex][colIndex].status;
        switch (oldStatus) {
            case CELL_STATUS_CLOSED : {
                newState.game.field[rowIndex][colIndex].status = CELL_STATUS_REVEALED;
                break;
            }

            case CELL_STATUS_REVEALED : {

                break;
            }

            default: {
                console.log(`unknown status ${oldStatus}`);
            }


        }


        this.setState(newState);
    };

    getContent = () => {
        switch (this.state.game.mode) {
            case GameMode.ON : {
                return <GameField
                    field={this.state.game.field}
                    onCellClick={this.cellClick}
                    debug={this.state.debug}
                />;
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
