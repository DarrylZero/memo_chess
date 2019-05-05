import React, {Component} from 'react'

/**
 * https://getbootstrap.com/docs/4.0/components/buttons/
 */

export class HeaderButtons {
    static BUTTON_SETTINGS = 10;
    static BUTTON_GAME = 20;
}

export default class Header extends Component {


    constructor() {
        super();
        this.settingsClick = function () {
            const self = this.props;
            self.onPaneChanged(HeaderButtons.BUTTON_SETTINGS);
        };

        this.gameClick = function () {
            const self = this.props;
            self.onPaneChanged(HeaderButtons.BUTTON_GAME);
        };


    }

    render() {
        return (
            <div className="btn-group">
                <button
                    type="button"
                    className="btn btn-info"
                    onClick={() => this.gameClick()}>game
                </button>
                <button
                    type="button"
                    className="btn btn-light"
                    onClick={() => this.settingsClick()}>settings
                </button>
            </div>
        );
    }
}



