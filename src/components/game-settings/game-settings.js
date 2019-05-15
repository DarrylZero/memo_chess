import React, {Component} from 'react'
import {AI_MODE} from '../../consts/ai-mode'
import './game-settings.css';
import AppActions from '../../actions/app-actions';

export default class GameSettings extends Component {

    render() {
        const {aiMode, misClickedCellsShowTime} = this.props.settings;
        const {aiOptions} = AI_MODE;
        const {dispatch} = this.props;

        const options = aiOptions.map((e) => <option key={e.name} value={e.name}> {e.name} </option>);

        const misclickedCaption = 'misclicked time lag(ms)';
        return (
            <div className="settings-ai-level">
                <label className="settings_property_label">IA level</label>
                <select
                    className="settings_property_value"
                    id="select"
                    value={aiMode}
                    onChange={(target) => dispatch(AppActions.aiLevelChanged(target.target.value))}>
                    {options}
                </select>
                <br/>
                <label className="settings_property_label">{misclickedCaption}</label>
                <input
                    type="text"
                    pattern="[0-9]{1,10}"
                    className="settings_property_value" value={misClickedCellsShowTime}
                    onChange={(event) => {
                        event.preventDefault();
                        dispatch(AppActions.misclickedTimeChanged(Number(event.target.value)))
                    }}
                    onSubmit={(event) => {
                        event.preventDefault();
                        dispatch(AppActions.misclickedTimeChanged(Number(event.target.value)))
                    }}
                />

            </div>

        );
    };
}

