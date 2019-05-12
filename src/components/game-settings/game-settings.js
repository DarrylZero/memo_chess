import React, {Component} from 'react'
import {AI_MODE} from '../../consts/ai-mode'
import './game-settings.css';
import AppActions from '../../actions/app-actions';

export default class GameSettings extends Component {

    render() {
        const {aiMode} = this.props.settings;
        const {aiOptions} = AI_MODE;
        const {dispatch} = this.props;

        const options = aiOptions.map((e) => <option key={e.name} value={e.name}> {e.name} </option>);

        return (
            <div className="settings-ai-level">
                <label>IA level</label>

                <select id="select"
                        value={aiMode}
                        onChange={(target) => {
                            dispatch(AppActions.aiLevelChanged(target.target.value));
                        }}>
                    {options}
                </select>
            </div>

        );
    };
}

