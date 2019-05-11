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
import Timer from "../../services/timer/timer";

const {DEFAULT_CELL_STATUS, CELL_STATUS_CLOSED, CELL_STATUS_REVEALED, CELL_STATUS_TEMPORARILY_SHOWN} = CellStatus;
const {DEFAULT_GAME_MODE} = GameMode;
const {INDIGO, LIGHT_BLUE, BLUE} = CellColor;
export default class App extends Component {

    state = {
        settings: {
            aiMode: DEFAULT_AI_MODE
        },

        game: {
            mode: DEFAULT_GAME_MODE,
            moveTurn: MoveTurn.YOU,
            colorToFind: BLUE,

            field: [
                [{status: DEFAULT_CELL_STATUS, color: BLUE}, {
                    status: DEFAULT_CELL_STATUS,
                    color: LIGHT_BLUE
                }, {status: DEFAULT_CELL_STATUS, color: INDIGO}, {status: DEFAULT_CELL_STATUS, color: LIGHT_BLUE}],
                [{status: DEFAULT_CELL_STATUS, color: BLUE}, {
                    status: DEFAULT_CELL_STATUS,
                    color: LIGHT_BLUE
                }, {status: DEFAULT_CELL_STATUS, color: INDIGO}, {status: DEFAULT_CELL_STATUS, color: LIGHT_BLUE}],
                [{status: DEFAULT_CELL_STATUS, color: BLUE}, {
                    status: DEFAULT_CELL_STATUS,
                    color: LIGHT_BLUE
                }, {status: DEFAULT_CELL_STATUS, color: INDIGO}, {status: DEFAULT_CELL_STATUS, color: LIGHT_BLUE}],
                [{status: DEFAULT_CELL_STATUS, color: BLUE}, {
                    status: DEFAULT_CELL_STATUS,
                    color: LIGHT_BLUE
                }, {status: DEFAULT_CELL_STATUS, color: INDIGO}, {status: DEFAULT_CELL_STATUS, color: LIGHT_BLUE}],
                [{status: DEFAULT_CELL_STATUS, color: BLUE}, {
                    status: DEFAULT_CELL_STATUS,
                    color: LIGHT_BLUE
                }, {status: DEFAULT_CELL_STATUS, color: INDIGO}, {status: DEFAULT_CELL_STATUS, color: LIGHT_BLUE}],
                [{status: DEFAULT_CELL_STATUS, color: BLUE}, {
                    status: DEFAULT_CELL_STATUS,
                    color: LIGHT_BLUE
                }, {status: DEFAULT_CELL_STATUS, color: INDIGO}, {status: DEFAULT_CELL_STATUS, color: LIGHT_BLUE}],
            ]
        },
    };

    constructor() {
        super();
        this.timer = new Timer();
    }


    componentDidMount() {
        this.timer.init(1000);
    }

    componentWillUnmount() {
        this.timer.shutdown();
    }

    render() {
        return (
            <div className="App">
                <Header onPaneChanged={this.paneChanged}/>
                {this.getContent()}
            </div>
        );
    };

    cellClick = (colIndex, rowIndex) => {

        this.setState((prevState) => {

            const newState = {...prevState};
            switch (newState.game.field[rowIndex][colIndex].status) {
                case CELL_STATUS_CLOSED : {
                    if (newState.game.colorToFind === newState.game.field[rowIndex][colIndex].color) {
                        newState.game.field[rowIndex][colIndex].status = CELL_STATUS_REVEALED;
                    } else {
                        newState.game.field[rowIndex][colIndex].status = CELL_STATUS_TEMPORARILY_SHOWN;
                        this.timer.startTimer(this.dropTemporaryShown, 3000);
                    }
                    this.nextColorToFind(newState);
                    break;
                }

                case CELL_STATUS_REVEALED :
                case CELL_STATUS_TEMPORARILY_SHOWN : {
                    break;
                }

                default: {
                    console.log(`unknown status ${newState.game.field[rowIndex][colIndex].status}`);
                }
            }
            return newState;
        });

    };

    getContent = () => {
        switch (this.state.game.mode) {
            case GameMode.ON : {
                return <GameField
                    field={this.state.game.field}
                    onCellClick={this.cellClick}
                    colorToFind={this.state.game.colorToFind}
                    onDebugButtonClick={this._debugButtonClick}
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

    dropTemporaryShown = (params) => {
        this.setState((prevState) => {
            const newState = {...prevState};
            for (let rowIndex = 0; rowIndex < newState.game.field.length; rowIndex++) {
                const row = newState.game.field[rowIndex];
                for (let colIndex = 0; colIndex < row.length; colIndex++) {
                    const cell = row[colIndex];
                    if (cell.status === CELL_STATUS_TEMPORARILY_SHOWN) {
                        cell.status = CELL_STATUS_CLOSED;
                    }
                }
            }
            return newState;
        });
    };

    nextColorToFind = (newState) => {
        newState.game.colorToFind = CellColor.randomColor();
    };

    _debugButtonClick = (event) => {
        switch (event.target.id) {
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
