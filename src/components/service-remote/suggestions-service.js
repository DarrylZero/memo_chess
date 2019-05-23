import React, {Component} from 'react'
import './suggestions-service.css'
import SuggestionItem from './suggestion-item'
import SuggestionGroup from "./suggestion-group";

export default class SuggestionsService extends Component {

    serviceUrl = 'http://127.0.0.1:53432/memorizador';
    suggestionsPath = 'suggestions/suggest';



    state = {
        number:'21',
        data: {
            "number": "2128506",
            "suggestions": []
        }
    };

    render() {

        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    enter the number :
                    <input type="text"
                           ref={(input) => this.input = input}
                           onChange={(e) => {
                               this.setState({number: e.target.value})
                           }}
                    />
                </label>
                <input type="submit" value="suggest"/>

                 <br/>

                {this.state.data.suggestions.map(suggestion => <SuggestionGroup suggestion={suggestion} />)}


            </form>
        );
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('handleSubmit ');
        const fullUri = `${this.serviceUrl}/${this.suggestionsPath}/2128506`;

        fetch(fullUri)
            .then(response => {
                return response.json()
            })
            .then(data => {
                this.setState({
                    data: data
                })
            })
            .catch((e) => {
                console.log(`rejected  ${e} `);
            });
    }

}
