import React, {Component, Fragment} from 'react';
import './game-over.css';

export default class GameOver extends Component {
    render() {
        const {winInfo} = this.props;
        const {startedDateTime, finishedDateTime} = winInfo;


        return (
            <Fragment>
                <h1>Game is over.</h1>
                <h2> started {this.formatDate(startedDateTime)} </h2>
                <h2> finished {this.formatDate(finishedDateTime)} </h2>
            </Fragment>
        );
    }

    formatDate = (date) => {
        return date.toLocaleString();
    }

}
