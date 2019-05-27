import React, {Component, Fragment} from 'react'
import './suggestion-group.css'


export default class SuggestionGroup extends Component {

    render() {
        const {suggestion} = this.props;
        return (
            <Fragment>
                <button className="btn suggestion_item_button" onClick={() => {
                    this._s();
                }}/>

                {suggestion.suggestion.map(words => {
                    return (
                        <Fragment>
                            <select className="suggestion_item">
                                {words.map(word => <option value={word}>{word}</option>)}
                            </select>
                        </Fragment>
                    )
                })}
                <br/>
            </Fragment>);
    }


    _s = () => {
        document.body.childNodes.forEach(e => {
            console.log(e);
        });

    }


}
