import React, {Component, Fragment} from 'react'
import './suggestion-group.css'


export default class SuggestionGroup extends Component {

    render() {
        const {suggestion, onSentence} = this.props;
        const formId = `suggestion_group_${Math.floor(Math.random() * 100000000)}`;

        return (
            <div id={formId}>
                <button className="btn suggestion_item_button" onClick={() => {
                    this.suggestionClick(formId, onSentence);
                }}/>

                {
                    suggestion.suggestion.map(words => {
                        return (
                            <Fragment>
                                <select name="suggestionSelect" className="suggestion_item">
                                    {words.map(word => <option value={word}>{word}</option>)}
                                </select>
                            </Fragment>
                        )
                    })}
                <br/>
            </div>);
    }


    suggestionClick = (formId, onSentence) => {
        const elementById = document.getElementById(formId);

        let sentence = '';
        elementById.childNodes.forEach((child) => {
            if (child.name === 'suggestionSelect') {
                sentence = sentence + ' ' + child.value;
            }
        });
        onSentence(sentence);
    }


}
