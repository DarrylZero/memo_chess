import React, {Component} from 'react'
import './header.css';
import AppActions from "../../actions/app-actions";
import AppPanes from "../../consts/app-panes";

/**
 * https://getbootstrap.com/docs/4.0/components/buttons/
 */
const {ABOUT, GAME, SUGGESTION, SETTINGS} = AppPanes;
export default class Header extends Component {


    getButtonStyle = (activePane, expectedPane) => {
        return `btn ${(activePane === expectedPane) ? "btn-info" : "btn-outline-secondary"}`;
    };

    render() {
        const {activePane, dispatch} = this.props;
        return (
            <div>
                <button
                    type="button"
                    className={this.getButtonStyle(activePane, GAME)}
                    onClick={(  ) => dispatch(AppActions.activePaneChanged(GAME))}>game
                </button>
                <button
                    type="button"
                    className={this.getButtonStyle(activePane, SETTINGS)}
                    onClick={() => dispatch(AppActions.activePaneChanged(SETTINGS))}>settings
                </button>
                <button
                    type="button"
                    className={this.getButtonStyle(activePane, SUGGESTION)}
                    onClick={() => dispatch(AppActions.activePaneChanged(SUGGESTION))}>suggestions
                </button>
                <button
                    type="button"
                    className={this.getButtonStyle(activePane, ABOUT)}
                    onClick={() => dispatch(AppActions.activePaneChanged(ABOUT))}>about
                </button>
            </div>
        );
    }
}



