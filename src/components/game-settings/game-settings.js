import React, {Component} from 'react'
import {AI_MODE} from './ai-mode'


export default class GameSettings extends Component {

    render() {
        const {aiMode} = this.props;

        // AI_MODE.forE

        return (
            <div>
                <input type="checkbox" id="scales" name="asdasdasscales" checked onChange={() => {}}/><br/>

                <select id="select">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>

            </div>

        );
    };
}

