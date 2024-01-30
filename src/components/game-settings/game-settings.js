import React, {Component} from 'react'
import './game-settings.css';
import AppActions from '../../actions/app-actions';

export default class GameSettings extends Component {

    render() {
        const {aiMode, misClickedCellsShowTime, dimensions} = this.props.settings;
        const {dispatch} = this.props;
        return (
            <div className="settings-ai-level">
                <table width="370" border="0">
                    <thead>
                    <tr>
                        <th>param</th>
                        <th>value</th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr>
                        <td>misclicked time lag(ms)</td>
                        <td>
                            <select className='settings_dropdown'
                                    value={misClickedCellsShowTime}
                                    onChange={(e) => dispatch(AppActions.misClickedTimeChanged(Number(e.target.value)))}>
                                <option>100</option>
                                <option>300</option>
                                <option>500</option>
                                <option>1000</option>
                                <option>1500</option>
                                <option>2500</option>
                            </select>
                        </td>
                    </tr>

                    <tr>
                        <td>field height</td>
                        <td>
                            <select className='settings_dropdown'
                                    value={dimensions.fieldHeight}
                                    onChange={(e) => dispatch(AppActions.heightChanged(Number(e.target.value)))}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>5</option>
                                <option>7</option>
                                <option>10</option>
                            </select>
                        </td>
                    </tr>

                    <tr>
                        <td>field width</td>
                        <td>
                            <select className='settings_dropdown'
                                    value={dimensions.fieldWidth}
                                    onChange={(e) => dispatch(AppActions.widthChanged(Number(e.target.value)))}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>5</option>
                                <option>7</option>
                                <option>10</option>
                            </select>
                        </td>
                    </tr>
                    </tbody>

                </table>
            </div>

        );
    };
}

