import React, {Component} from 'react'

/**
 * https://getbootstrap.com/docs/4.0/components/buttons/
 */

export class HeaderButtons {
    static BUTTON_SETTINGS = 10;
    static BUTTON_GAME = 20;
    static ABOUT_BUTTON = 30;
}

export default class Header extends Component {

    render() {
        const {onPaneChanged} = this.props;
        return (
            <div className="btn-group">
                <button
                    type="button"
                    className="btn btn-info"
                    onClick={() => {onPaneChanged(HeaderButtons.BUTTON_GAME)}}>game
                </button>
                <button
                    type="button"
                    className="btn btn-light"
                    onClick={() => {onPaneChanged(HeaderButtons.BUTTON_SETTINGS)}}>settings
                </button>
                <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => {onPaneChanged(HeaderButtons.ABOUT_BUTTON)}}>about
                </button>
            </div>
        );
    }
}



