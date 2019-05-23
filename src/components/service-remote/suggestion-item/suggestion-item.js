import React, {Component, Fragment} from 'react'
import './suggestion-item.css'


export default class SuggestionItem extends Component {


    render() {
        return (
            // const

            <Fragment>
                <select className="suggestion_item" name="cars">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="fiat">Fiat</option>
                    <option value="audi">Audi</option>
                </select>
            </Fragment>

        );

    }
}