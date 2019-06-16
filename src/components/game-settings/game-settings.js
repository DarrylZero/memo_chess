import React, {Component} from 'react'
import './game-settings.css';
import AppActions from '../../actions/app-actions';

export default class GameSettings extends Component {

    render() {
        const {aiMode, misClickedCellsShowTime, dimensions} = this.props.settings;
        const {dispatch} = this.props;
        return (
            /*

                        <div className="settings-ai-level">
                            <br/>
                            <label className="settings_property_label">{'misclicked time lag(ms)'}</label>
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
                            <br/>
                            <label className="settings_property_label">{'height'}</label>
                            <input
                                type="text"
                                pattern="[0-9]{1,10}"
                                className="settings_property_value"
                                value={dimensions.fieldHeight}
                                onChange={(event) => {
                                    event.preventDefault();
                                    dispatch(AppActions.heightChanged(Number(event.target.value)))
                                }}
                                onSubmit={(event) => {
                                    event.preventDefault();
                                    dispatch(AppActions.heightChanged(Number(event.target.value)))
                                }}
                            />
                            <br/>
                            <label className="settings_property_label">{'width'}</label>
                            <input
                                type="text"
                                pattern="[0-9]{1,10}"
                                className="settings_property_value"
                                value={dimensions.fieldWidth}
                                onChange={(event) => {
                                    event.preventDefault();
                                    dispatch(AppActions.widthChanged(Number(event.target.value)))
                                }}
                                onSubmit={(event) => {
                                    event.preventDefault();
                                    dispatch(AppActions.widthChanged(Number(event.target.value)))
                                }}
                            />
                        </div>
            */

            <div className="settings-ai-level">
                <table width="370" border="2">
                    <thead>
                    <tr>
                        <th>param</th>
                        <th>value</th>
                    </tr>
                    </thead>

                    <tr>
                        <td>misclicked time lag(ms)</td>
                        <td>
                            <input className='input_value' type='text'
                                   value={misClickedCellsShowTime}
                                   onChange={(e) => dispatch(AppActions.misclickedTimeChanged(Number(e.target.value)))} />
                        </td>
                    </tr>

                    <tr>
                        <td>field height</td>
                        <td>
                            <select value={dimensions.fieldHeight}
                                    onChange={(e) => {dispatch(AppActions.heightChanged(Number(e.target.value)))}}>
                                <option>1</option>
                                <option>3</option>
                                <option>5</option>
                                <option>7</option>
                            </select>

                        </td>
                    </tr>

                    <tr>
                        <td>field width</td>
                        <td>
                            <select value={dimensions.fieldWidth}
                                    onChange={(e) => {dispatch(AppActions.widthChanged(Number(e.target.value)))}}>
                                <option>1</option>
                                <option>3</option>
                                <option>5</option>
                                <option>7</option>
                            </select>
                        </td>
                    </tr>

                </table>
            </div>

        );
    };
}

