import React, {Component} from 'react'
import './suggestions-service.css'
import SuggestionGroup from "./suggestion-group";
import SuggestionSentence from "./suggestion-sentence";

const SUGGESTER = 'SUGGESTER';
export default class SuggestionsService extends Component {

    serviceUrl = 'http://127.0.0.1:53432/memorizador';
    suggestionsPath = 'suggestions/suggest';


    state = {
        data: {
            number: "2128506",
            suggestions: [],
        },
        error: null,
        sentence: null
    };

    render() {
        return (
            <form className="suggestions-service"
                  onSubmit={this.handleSubmit}>
                <label>
                    <input
                        type="text"
                        ref={(input) => this.input = input}
                        onChange={(e) => {
                            const newState = {number: e.target.value};
                            this.setState(newState)
                        }}
                        value={this.state.number}
                    />
                </label>
                <input
                    className="suggestions-service-button"
                    type="submit"
                    value="suggest"/>
                <br/>

                {
                    this.state.error ?
                        <h2> {this.state.error} </h2> :
                        this.state.data.suggestions.map(suggestion => {
                                return <SuggestionGroup
                                    suggestion={suggestion}
                                    onSentence={(sentence) => {
                                        console.log(`sentence = ${sentence}`);
                                        this.setState({
                                            sentence: sentence
                                        });
                                    }}/>
                            }
                        )
                }
                <SuggestionSentence
                    sentence={this.state.sentence}
                    onSentence={(sentence) => {
                        this.setState({
                            sentence: sentence
                        })
                    }}
                    checkSentence={this.checkSentence}
                    number={this.state.data.number}/>

            </form>
        );
    }

    componentDidMount = () => {
        const savedStateString = localStorage.getItem(SUGGESTER);
        if (savedStateString) {
            const savedState = JSON.parse(savedStateString);
            this.setState(savedState);
        }

        window.onbeforeunload = () => {
            localStorage.setItem(SUGGESTER, JSON.stringify(this.state.data));
        }
    };

    componentWillUnmount() {
        window.onbeforeunload = null;
        localStorage.setItem(SUGGESTER, JSON.stringify(this.state.data));
    }


    handleSubmit = (e) => {
        e.preventDefault();
        const fullUri = `${this.serviceUrl}/${this.suggestionsPath}/${this.state.number}`;

        fetch(fullUri)
            .then(response => {
                return response.json()
            })
            .then(data => {
                this.setState({
                    error: null,
                    data: data
                })
            })
            .catch((e) => {
                this.setState({
                    error: e.message
                })
            });
    };

    checkSentence = (sentence, number) => {
        console.log(`on change sentence[${sentence}] number[${number}]`);
    };

}
