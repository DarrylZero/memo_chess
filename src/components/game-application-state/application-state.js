import GameMode from './game-mode'
import {HeaderButtons} from '../header/header'

class ApplicationState {

    random = new Date().toString();

    settings = {

    };

    game = {
        mode: GameMode.DEFAULT,
        field: [
            [{status: 20}, {status: 20}, {status: 20}, {status: 20}],
            [{status: 20}, {status: 20}, {status: 20}, {status: 20}],
            [{status: 20}, {status: 20}, {status: 20}, {status: 20}],
            [{status: 20}, {status: 20}, {status: 20}, {status: 20}],
            [{status: 20}, {status: 20}, {status: 20}, {status: 20}],
            [{status: 20}, {status: 20}, {status: 20}, {status: 20}]
        ]
    };

    paneChanged = (paneId) => {
        switch (paneId) {
            case  HeaderButtons.BUTTON_SETTINGS : {
                this.game.mode = GameMode.SETTINGS;
                break;
            }

            case  HeaderButtons.BUTTON_GAME : {
                this.game.mode = GameMode.ON;
                break;
            }

            default : {
                console.log(`Pane ${paneId} is not known`)
            }
        }
    }
}

const applicationState = new ApplicationState();
export default applicationState;

/*
const applicationState = {
    settings: {},

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
    paneChanged: (paneId) => {
        switch (paneId) {
            case  HeaderButtons.BUTTON_SETTINGS : {
                this.game.mode = GameMode.SETTINGS;
                break;
            }

            case  HeaderButtons.BUTTON_GAME : {
                this.game.mode = GameMode.ON;
                break;
            }

            default : {
                console.log(`Pane ${paneId} is not known`)
            }
        }
    }
}
*/







