import React, {Component, Fragment} from 'react'
import './suggestion-group.css'


export default class SuggestionGroup extends Component {


    render() {

        const {suggestion} = this.props;
        const wordsSet = suggestion.suggestion;
        const words = wordsSet[0];
        const oneWordSuggestion = wordsSet[0].map(word => <option value={word}>{word}</option>);
        const oneWordSuggestion1 = wordsSet[1].map(word => <option value={word}>{word}</option>);

        return (
            <Fragment>
                <Fragment>
                    <button className="btn suggestion_item_button" onClick={() => {
                    }}>.
                    </button>

                    <select className="suggestion_item">
                       {oneWordSuggestion}
                    </select>
                    <select className="suggestion_item">
                       {oneWordSuggestion1}
                    </select>
                    <br/>
                </Fragment>
            </Fragment>
        );

        /*
                const suggestionElement = suggestion.suggestion[0];
                const transformed = suggestionElement
                    .map(word => {
                        return <option value={word}>{word}</option>
                    });


                return (
                    <Fragment>
                        <button className="btn suggestion_item_button" onClick={() => {
                        }}>.
                        </button>

                        <select className="suggestion_item">


                        </select>
                        <br/>
                    </Fragment>
                );
        */
    }
}
/*

<Fragment>
    <button className="btn suggestion_item_button" onClick={() => {
    }}>.
    </button>

    <select className="suggestion_item">
        {transformed}

    </select>
    <br/>
</Fragment>
*/
