import React, {Component, Fragment} from 'react';
import './game-over.css';

export default class GameOver extends Component {
    render() {
        const {winInfo} = this.props;
        const {startedDateTime, finishedDateTime} = winInfo;


        return (
            <Fragment>
                <h1>Game is over. You win!! </h1>
                <h2> started ${startedDateTime} </h2>
                <h2> finished ${finishedDateTime} </h2>
            </Fragment>
        );
    }
}
