import React, {Component} from 'react'
import {AI_MODE} from '../consts/ai-mode'
import './game-settings.css';
import AppActions from '../actions/app-actions';

export default class GameSettings extends Component {

    render() {
        const {aiMode} = this.props.settings;
        const {aiOptions} = AI_MODE;
        const {dispatch} = this.props;

        const options = [];
        for (let index = 0; index < aiOptions.length; index++) {
            const aiOption = aiOptions[index];
            options.push(
                <option key={index}
                        value={aiOption.name}>
                    {aiOption.name}
                </option>)
        }

        return (
            <div className="settings-ai-level">
                <label>IA level</label>

                <select id="select" value={aiMode}
                        onChange={(target) => {
                            console.log(target.target.value);
                            dispatch(AppActions.aiLevelChanged(target.target.value));
                        }}>
                    {options}
                </select>
            </div>

        );
    };
}

