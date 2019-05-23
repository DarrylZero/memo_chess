import React, {Component, Fragment} from 'react'
import './suggestion-group.css'


export default class SuggestionGroup extends Component {


    render() {
        return (
            <Fragment>
                <select className="suggestion_item" name="cars">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="fiat">Fiat</option>
                    <option value="audi">Audi</option>
                </select>
                <br/>
            </Fragment>
        );
    }
}