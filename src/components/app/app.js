import React, {Component} from 'react';
import './app.css';
import GameField from './../game-field'
import GameMode from '../consts/game-mode'
import Header from '../header'
import GameSettings from "../game-settings";
import {HeaderButtons} from '../header/header'
import {DEFAULT_AI_MODE} from '../consts/ai-mode'
import GameAbout from "../component-about/component-about";
import DebugFlags from "../consts/debug-flags";
import CellStatus from "../consts/cell-status";
import CellColor from "../consts/cell-color";
import MoveTurn from "../consts/move-turn";
import {DEFAULT_ROW_COUNT} from "../consts/field-dimension.js"
import {DEFAULT_COL_COUNT} from "../consts/field-dimension.js"

const {DEFAULT_CELL_STATUS, CELL_STATUS_CLOSED: CELL_STATUS_SHUT, CELL_STATUS_REVEALED} = CellStatus;
const {DEFAULT_GAME_MODE} = GameMode;
const {DEBUG_SHOW_INDEXES} = DebugFlags;

const {INDIGO, LIGHT_BLUE, BLUE} = CellColor;
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
            moveTurn: MoveTurn.YOU,
            colorToFind: BLUE,

            field: [
                [{status: DEFAULT_CELL_STATUS, color: BLUE}, {status: DEFAULT_CELL_STATUS, color: LIGHT_BLUE}, {status: DEFAULT_CELL_STATUS, color: INDIGO}, {status: DEFAULT_CELL_STATUS, color: LIGHT_BLUE}],
                [{status: DEFAULT_CELL_STATUS, color: BLUE}, {status: DEFAULT_CELL_STATUS, color: LIGHT_BLUE}, {status: DEFAULT_CELL_STATUS, color: INDIGO}, {status: DEFAULT_CELL_STATUS, color: LIGHT_BLUE}],
                [{status: DEFAULT_CELL_STATUS, color: BLUE}, {status: DEFAULT_CELL_STATUS, color: LIGHT_BLUE}, {status: DEFAULT_CELL_STATUS, color: INDIGO}, {status: DEFAULT_CELL_STATUS, color: LIGHT_BLUE}],
                [{status: DEFAULT_CELL_STATUS, color: BLUE}, {status: DEFAULT_CELL_STATUS, color: LIGHT_BLUE}, {status: DEFAULT_CELL_STATUS, color: INDIGO}, {status: DEFAULT_CELL_STATUS, color: LIGHT_BLUE}],
                [{status: DEFAULT_CELL_STATUS, color: BLUE}, {status: DEFAULT_CELL_STATUS, color: LIGHT_BLUE}, {status: DEFAULT_CELL_STATUS, color: INDIGO}, {status: DEFAULT_CELL_STATUS, color: LIGHT_BLUE}],
                [{status: DEFAULT_CELL_STATUS, color: BLUE}, {status: DEFAULT_CELL_STATUS, color: LIGHT_BLUE}, {status: DEFAULT_CELL_STATUS, color: INDIGO}, {status: DEFAULT_CELL_STATUS, color: LIGHT_BLUE}],
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
            case CELL_STATUS_SHUT : {
                if (newState.game.colorToFind === newState.game.field[rowIndex][colIndex].color) {
                    newState.game.field[rowIndex][colIndex].status = CELL_STATUS_REVEALED;
                }
                this.nextColorToFind();
                break;
            }

            case CELL_STATUS_REVEALED : {

                return;
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
                    onDebugButtonClick={this._debugButtonClick}
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

    nextColorToFind = () => {
        const newState = {...this.state};
        newState.game.colorToFind = CellColor.randomColor();
        this.setState(newState);
    };

    _debugButtonClick = (event) => {
        switch (event.target.id) {
            case "random_color_debug": {
                console.log('random color = ' + CellColor.randomColor());
                break;
            }

            case "rebuild_state" : {
                console.log('rebuild_state');
                this.restartGameState();
                break;
            }

            default: {
            }
        }
    };

    restartGameState = () => {
        const newState = {...this.state};
        newState.game = {
            mode: DEFAULT_GAME_MODE,
            moveTurn: MoveTurn.YOU,
            colorToFind: CellColor.randomColor(),
            field: this.randomizeFields()
        }
        this.setState(newState);
        console.log(`newState = ${newState}`);
    };

    randomizeFields = () => {
        const rows = [];
        for (let rowIndex = 0; rowIndex < DEFAULT_ROW_COUNT; rowIndex++) {
            const aRow = [];
            for (let colIndex = 0; colIndex < DEFAULT_COL_COUNT; colIndex++) {
                aRow.push({
                    status: DEFAULT_CELL_STATUS,
                    color: CellColor.randomColor()
                });
            }
            rows.push(aRow);
        }
        return rows;
    }


};
