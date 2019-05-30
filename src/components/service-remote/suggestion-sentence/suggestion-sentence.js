import React, {Component, Fragment} from 'react'
import './suggestion-sentence.css'


export default class SuggestionSentence extends Component {

    render() {
        const {sentence} = this.props;

        if (!sentence) {
            return null;
        }

        return (
            <div>
                <input
                    type="text"
                    onChange={(e) => {

                        console.log("on change " + e.target.value);

                }}/>


                <label className="cell_green"/>
                {/*<label className="cell_red"/>*/}
            </div>);
    }




}
