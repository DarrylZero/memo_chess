import React, {Component, Fragment} from 'react'
import './suggestion-sentence.css'
import CellColor from "../../../consts/cell-color";


export default class SuggestionSentence extends Component {

    serviceUrl = 'http://127.0.0.1:53432/memorizador';
    suggestionsPath = 'suggestions/suggest';

    state = {
        isAllowed: false
    };

    render() {

        if (!this.props.sentence) {
            return null;
        }
        if (!this.props.onSentence) {
            return null;
        }

        const {sentence, number, onSentence, checkSentence} = this.props;
        const buttonStyle = `quadrant btn ${CellColor.colorStyle(CellColor.GREEN)}`;

        return (
            <div>
                <button type="button" className={buttonStyle} onClick={() => {
                    checkSentence(sentence, number);
                }}/>
                <br/>
                <input
                    type="text"
                    className="sentence_input"
                    value={sentence}
                    onChange={(e) => {
                        onSentence(e.target.value);
                        checkSentence(e.target.value, number);
                    }}/>

            </div>);
    }
}
