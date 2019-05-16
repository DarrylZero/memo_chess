import React, {Component} from 'react';
import './component-about.css';

export default class ApplicationAbout extends Component {

    render() {
        const {game: {field}} = this.props.state;
        return (
            <div className="app-about">
                <h2> About </h2>
                Something that describes this wonderful project.
            </div>
        );
    }
}
