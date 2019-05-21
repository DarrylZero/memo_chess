import React, {Component} from 'react'
import './game-settings.css';
import AppActions from '../../actions/app-actions';

export default class GameSettings extends Component {

    render() {
        const {aiMode, misClickedCellsShowTime} = this.props.settings;
        const {dispatch} = this.props;
        const misclickedCaption = 'misclicked time lag(ms)';
        return (
            <div className="settings-ai-level">
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

