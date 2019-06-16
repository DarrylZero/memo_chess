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
        var year = date.getFullYear();
        var month = date.getMonth() + 1; // months are zero indexed
        var day = date.getDate();
        var hour = date.getHours();
        var minute = date.getMinutes();
        var second = date.getSeconds();
        var hourFormatted = hour % 12 || 12; // hour returned in 24 hour format
        var minuteFormatted = minute < 10 ? "0" + minute : minute;
        var morning = hour < 12 ? "am" : "pm";

        return month + "/" + day + "/" + year + " " + hourFormatted + ":" +
            minuteFormatted + morning;
    }

}
