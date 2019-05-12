import React, {Component} from 'react'
import './header.css';
import AppActions from "../actions/app-actions";

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
        const {activePane, dispatch} = this.props;
        return (
            <div>
                <button
                    type="button"
                    className="btn"
                    onClick={() => dispatch(AppActions.activePaneChanged(HeaderButtons.BUTTON_GAME))}>game
                </button>
                <button
                    type="button"
                    className="btn"
                    onClick={() => dispatch(AppActions.activePaneChanged(HeaderButtons.BUTTON_SETTINGS))}>settings
                </button>
                <button
                    type="button"
                    className="btn"
                    onClick={() => dispatch(AppActions.activePaneChanged(HeaderButtons.ABOUT_BUTTON))}>about
                </button>
            </div>
        );
    }
}



