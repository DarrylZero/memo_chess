import React, {Component} from 'react';
import './component-about.css';
import {getStatistics, isOver} from '../../datautils/stat-utils';

export default class ApplicationAbout extends Component {

    render() {
        const {game:{field}} = this.props.state;
        return (
            <div className="app-about">
                <h2> About </h2>
                   Something that describes this wonderful project.

                <button  width="40" height="40" onClick={() => {
                    getStatistics(field);
                    isOver(field);
                }} >asdasdsdsdasdasdsdasda</button>


            </div>
        );
    }
}
