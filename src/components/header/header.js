import React, {Component} from 'react'

/**
 * https://getbootstrap.com/docs/4.0/components/buttons/
 */
class Header extends Component {


    constructor() {
        super();
        this.settingsClick = function () {
            console.log("settingsClick !~!")
        };

        this.gameClick = function () {
            console.log("gameClick !~!")
        };


    }

    render() {
        return (
            <div className="btn-group">
                <button
                    type="button"
                    className="btn btn-info"
                    onClick={this.gameClick}>game
                </button>
                <button
                    type="button"
                    className="btn btn-light"
                    onClick={this.settingsClick}>settings
                </button>
            </div>
        );
    }
}

export default Header;


