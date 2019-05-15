import React, {Component} from 'react';
import './app.css';
import AppPanes from '../../consts/app-panes'
import Header from '../header'
import GameSettings from "../game-settings";
import {DUMB} from '../../consts/ai-mode'
import GameAbout from "../about/component-about";
import CellStatus from "../../consts/cell-status";
import CellColor from "../../consts/cell-color";
import Player from "../../consts/player";
import {DEFAULT_COL_COUNT, DEFAULT_ROW_COUNT} from "../../consts/field-dimension.js"
import Timer from "../../services/timer/timer";
import GameField from "../game-field/game-field";
import AppActions from "../../actions/app-actions";
import GameState from "../../consts/game-state";

const {DEFAULT_CELL_STATUS, CELL_STATUS_CLOSED, CELL_STATUS_REVEALED, CELL_STATUS_TEMPORARILY_SHOWN} = CellStatus;
const {GAME} = AppPanes;
const {INDIGO, LIGHT_BLUE, BLUE} = CellColor;
const {CELL_CLICKED, RESTART, AI_LEVEL_CHANGED, DEBUG_ACTION, ACTIVE_PANE_CHANGED, MISCLICKED_TIME_CHANGED} = AppActions;
const {YOU} = Player;
const {CREATED, STARTED} = GameState;

export default class App extends Component {

    state = {
        settings: {
            aiMode: DUMB,
            misClickedCellsShowTime: 100
        },

        game: {
            activePane: GAME,
            moveTurn: YOU,
            winner: null,
            colorToFind: BLUE,
            mode: CREATED,

            field: [
                [{status: DEFAULT_CELL_STATUS, color: BLUE, takenBy: null}, {
                    status: DEFAULT_CELL_STATUS,
                    color: LIGHT_BLUE,
                    takenBy: null
                }, {status: DEFAULT_CELL_STATUS, color: INDIGO, takenBy: null}, {
                    status: DEFAULT_CELL_STATUS,
                    color: LIGHT_BLUE,
                    takenBy: null
                }],
                [{status: DEFAULT_CELL_STATUS, color: BLUE, takenBy: null}, {
                    status: DEFAULT_CELL_STATUS,
                    color: LIGHT_BLUE,
                    takenBy: null
                }, {status: DEFAULT_CELL_STATUS, color: INDIGO, takenBy: null}, {
                    status: DEFAULT_CELL_STATUS,
                    color: LIGHT_BLUE,
                    takenBy: null
                }],
                [{status: DEFAULT_CELL_STATUS, color: BLUE, takenBy: null}, {
                    status: DEFAULT_CELL_STATUS,
                    color: LIGHT_BLUE,
                    takenBy: null
                }, {status: DEFAULT_CELL_STATUS, color: INDIGO, takenBy: null}, {
                    status: DEFAULT_CELL_STATUS,
                    color: LIGHT_BLUE,
                    takenBy: null
                }],
                [{status: DEFAULT_CELL_STATUS, color: BLUE, takenBy: null}, {
                    status: DEFAULT_CELL_STATUS,
                    color: LIGHT_BLUE,
                    takenBy: null
                }, {status: DEFAULT_CELL_STATUS, color: INDIGO, takenBy: null}, {
                    status: DEFAULT_CELL_STATUS,
                    color: LIGHT_BLUE,
                    takenBy: null
                }],
                [{status: DEFAULT_CELL_STATUS, color: BLUE, takenBy: null}, {
                    status: DEFAULT_CELL_STATUS,
                    color: LIGHT_BLUE,
                    takenBy: null
                }, {status: DEFAULT_CELL_STATUS, color: INDIGO, takenBy: null}, {
                    status: DEFAULT_CELL_STATUS,
                    color: LIGHT_BLUE,
                    takenBy: null
                }],
                [{status: DEFAULT_CELL_STATUS, color: BLUE, takenBy: null}, {
                    status: DEFAULT_CELL_STATUS,
                    color: LIGHT_BLUE,
                    takenBy: null
                }, {status: DEFAULT_CELL_STATUS, color: INDIGO, takenBy: null}, {
                    status: DEFAULT_CELL_STATUS,
                    color: LIGHT_BLUE,
                    takenBy: null
                }],
            ]
        },
    };

    timer = new Timer();

    componentDidMount = () => {
        this.timer.init(200);
    }

    componentWillUnmount() {
        this.timer.shutdown();
    }

    render() {
        return (
            <div className="App">
                <Header dispatch={this.dispatch} activePane={this.state.game.activePane}/>
                {this._getContent()}
            </div>
        );
    };

    dispatch = (action) => {
        switch (action.type) {
            case CELL_CLICKED : {
                this._cellClick(action.colIndex, action.rowIndex);
                return;
            }

            case RESTART : {
                this._restartGame();
                return;
            }

            case AI_LEVEL_CHANGED: {
                const newState = {...this.state};
                newState.settings.aiMode = action.level;
                this.setState(newState);
                return;
            }

            case MISCLICKED_TIME_CHANGED: {
                const newState = {...this.state};
                newState.settings.misClickedCellsShowTime = action.misClickedCellsShowTime;
                this.setState(newState);
                return;
            }

            case ACTIVE_PANE_CHANGED : {
                this._paneChanged(action.paneId);
                return;
            }

            case DEBUG_ACTION : {
                this._debugAction(action.actionId);
            }

            default:
                throw `unknown event ${action}`;
        }

    };


    /*  ------------------------------------------------- privates ------------------------------------------------- */

    _cellClick = (colIndex, rowIndex) => {
        if (this.state.game.mode !== STARTED) {
            alert('start the game !!');
            return
        }

        this.setState((prevState) => {
            const newState = {...prevState};
            const cell = newState.game.field[rowIndex][colIndex];
            switch (cell.status) {
                case CELL_STATUS_CLOSED : {
                    if (newState.game.colorToFind === cell.color) {
                        cell.status = CELL_STATUS_REVEALED;
                        cell.takenBy = YOU;
                    } else {
                        cell.status = CELL_STATUS_TEMPORARILY_SHOWN;
                        this.timer.startTimer(this.dropTemporaryShown, this.state.settings.misClickedCellsShowTime,
                            {rowIndex, colIndex});
                    }
                    this._nextColorToFind(newState);
                    break;
                }

                case CELL_STATUS_REVEALED :
                case CELL_STATUS_TEMPORARILY_SHOWN : {
                    break;
                }

                default: {
                    console.log(`unknown status ${cell.status}`);
                }
            }
            return newState;
        });

    };

    _getContent = () => {
        switch (this.state.game.activePane) {
            case AppPanes.GAME : {
                return <GameField state={this.state} dispatch={this.dispatch}/>;
            }

            case AppPanes.SETTINGS: {
                return <GameSettings settings={this.state.settings} dispatch={this.dispatch}/>;
            }

            case AppPanes.ABOUT : {
                return <GameAbout state={this.state} dispatch={this.dispatch}/>;
            }

            default: {
                throw `Unexpected pane ${this.state.game.activePane}`;
            }
        }
    };

    _paneChanged = (paneId) => {
        const newState = {...this.state};
        switch (paneId) {
            case  AppPanes.GAME :
            case  AppPanes.SETTINGS :
            case  AppPanes.ABOUT : {
                newState.game.activePane = paneId;
                break;
            }

            default : {
                console.log(`Pane ${paneId} is not known`)
            }
        }
        this.setState(newState);
    };

    _debugAction = (actionId) => {
        const newState = {...this.state};
        switch (actionId) {

            default : {
                console.log(`action ${actionId} is not known`)
            }
        }
        // this.setState(newState);
    };





    dropTemporaryShown = (clickedCell) => {
        this.setState((prevState) => {
            const newState = {...prevState};
            for (let rowIndex = 0; rowIndex < newState.game.field.length; rowIndex++) {
                const row = newState.game.field[rowIndex];
                for (let colIndex = 0; colIndex < row.length; colIndex++) {
                    const cell = row[colIndex];
                    if (cell.status === CELL_STATUS_TEMPORARILY_SHOWN &&
                        clickedCell.rowIndex === rowIndex &&
                        clickedCell.colIndex === colIndex) {

                        cell.status = CELL_STATUS_CLOSED;
                    }
                }
            }
            return newState;
        });
    };

    _nextColorToFind = (newState) => {
        newState.game.colorToFind = CellColor.randomColor();
    };

    _restartGame = () => {
        const newState = {...this.state};
        newState.game = {
            activePane: GAME,
            mode: STARTED,
            moveTurn: Player.YOU,
            colorToFind: CellColor.randomColor(),
            field: this._getRandomCells()
        };
        this.setState(newState);
    };

    _getRandomCells = () => {
        const rows = [];
        for (let rowIndex = 0; rowIndex < DEFAULT_ROW_COUNT; rowIndex++) {
            const aRow = [];
            for (let colIndex = 0; colIndex < DEFAULT_COL_COUNT; colIndex++) {
                aRow.push({
                    status: DEFAULT_CELL_STATUS,
                    color: CellColor.randomColor(),
                    takenBy: null
                });
            }
            rows.push(aRow);
        }
        return rows;
    }


};
