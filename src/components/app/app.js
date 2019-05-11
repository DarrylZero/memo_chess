import React, {Component} from 'react';
import './app.css';
import AppPanes from '../consts/app-panes'
import Header from '../header'
import GameSettings from "../game-settings";
import {HeaderButtons} from '../header/header'
import {DEFAULT_AI_MODE} from '../consts/ai-mode'
import GameAbout from "../component-about/component-about";
import CellStatus from "../consts/cell-status";
import CellColor from "../consts/cell-color";
import MoveTurn from "../consts/move-turn";
import {DEFAULT_COL_COUNT, DEFAULT_ROW_COUNT} from "../consts/field-dimension.js"
import Timer from "../../services/timer/timer";
import GameField from "../game-field/game-field";
import AppActions from "../actions/app-actions";

const {DEFAULT_CELL_STATUS, CELL_STATUS_CLOSED, CELL_STATUS_REVEALED, CELL_STATUS_TEMPORARILY_SHOWN} = CellStatus;
const {GAME} = AppPanes;
const {INDIGO, LIGHT_BLUE, BLUE} = CellColor;
const {CELL_CLICKED, RESTART} = AppActions;

export default class App extends Component {

    state = {
        settings: {
            aiMode: DEFAULT_AI_MODE
        },

        game: {
            activePane: GAME,
            moveTurn: MoveTurn.YOU,
            winner: null,

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

    dispatch = (event) => {
        switch (event.action) {
            case CELL_CLICKED : {
                this._cellClick(event.colIndex, event.rowIndex);
                return;
            }

            case RESTART : {
                this.restartGame();
                return;
            }

            default:
                throw `unknown event ${event}`;
        }

    };


    /*  ------------------------------------------------- privates ------------------------------------------------- */

    _cellClick = (colIndex, rowIndex) => {
        this.setState((prevState) => {
            const newState = {...prevState};
            switch (newState.game.field[rowIndex][colIndex].status) {
                case CELL_STATUS_CLOSED : {
                    if (newState.game.colorToFind === newState.game.field[rowIndex][colIndex].color) {
                        newState.game.field[rowIndex][colIndex].status = CELL_STATUS_REVEALED;
                    } else {
                        newState.game.field[rowIndex][colIndex].status = CELL_STATUS_TEMPORARILY_SHOWN;
                        this.timer.startTimer(this.dropTemporaryShown, 3000, {rowIndex, colIndex});
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
        switch (this.state.game.activePane) {
            case AppPanes.GAME : {
                return <GameField state={this.state} dispatch={this.dispatch}/>;
            }

            case AppPanes.SETTINGS: {
                return <GameSettings state={this.state} dispatch={this.dispatch}/>;
            }

            case AppPanes.ABOUT : {
                return <GameAbout state={this.state} dispatch={this.dispatch}/>;
            }

            default: {
                throw `Unexpected pane ${this.state.game.activePane}`;
            }
        }
    };

    paneChanged = (paneId) => {
        const newState = {...this.state};
        switch (paneId) {
            case  HeaderButtons.BUTTON_GAME : {
                newState.game.activePane = AppPanes.GAME;
                break;
            }

            case  HeaderButtons.ABOUT_BUTTON : {
                newState.game.activePane = AppPanes.ABOUT;
                break;
            }

            case  HeaderButtons.BUTTON_SETTINGS : {
                newState.game.activePane = AppPanes.SETTINGS;
                break;
            }

            default : {
                console.log(`Pane ${paneId} is not known`)
            }
        }
        this.setState(newState);
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

    // #ATTE
    nextColorToFind = (newState) => {
        newState.game.colorToFind = CellColor.randomColor();
    };

    // #ATTE
    debugButtonClick = (event) => {
        switch (event.target.id) {
            case "rebuild_state" : {
                console.log('rebuild_state');
                this.restartGame();
                break;
            }

            default: {
            }
        }
    };

    // #ATTE
    restartGame = () => {
        const newState = {...this.state};
        newState.game = {
            activePane: GAME,
            moveTurn: MoveTurn.YOU,
            colorToFind: CellColor.randomColor(),
            field: this.getRandomCells()
        };
        this.setState(newState);
    };

    // #ATTE
    getRandomCells = () => {
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
