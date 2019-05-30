import React, {Component, Fragment} from 'react'
import './suggestion-group.css'


export default class SuggestionGroup extends Component {

    render() {
        const {suggestion} = this.props;
        const formId = `suggestion_group_${Math.floor(Math.random() * 100000000)}`;

        return (
            <div id={formId}>
                <button className="btn suggestion_item_button" onClick={() => {
                    this._s(formId);
                }}/>

                {
                    suggestion.suggestion.map(words => {
                    return (
                        <Fragment>
                            <select className="suggestion_item">
                                {words.map(word => <option value={word}>{word}</option>)}
                            </select>
                        </Fragment>
                    )
                })}
                <br/>
            </div>);
    }


    _s = (formId) => {

        const elementById = document.getElementById(formId);
        console.log(formId);
        console.log(elementById);


    }


}
