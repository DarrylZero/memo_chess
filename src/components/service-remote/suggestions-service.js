import React, {Component} from 'react'
import './suggestions-service.css'
import unirest from 'unirest'


export default class SuggestionsService extends Component {

    serviceUrl = 'http://127.0.0.1:53432/memorizador';


    state = {
        data: null

    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    enter the number :
                    <input type="text" ref={(input) => this.input = input}/>
                </label>
                <input type="submit" value="suggest"/>
            </form>
        );
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('handleSubmit ');

        const fullUri1 = `${this.serviceUrl}/suggestions/suggest/2128506`;
        // const fullUri = `http://127.0.0.1:53432/memorizador/suggestions/suggest/000121112`;
        const fullUri = `http://127.0.0.1:53432/memorizador/suggestions/health`;


        fetch(fullUri, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(data => {
                console.log('data ');

                // this.setState({data})
            }).catch((e) => {
                debugger;
                console.log('rejected ');

            }
        );


// https://rapidapi.com/matchilling/api/chuck-norris

        /*
                unirest.get("https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random")
                    .header("X-RapidAPI-Host", "matchilling-chuck-norris-jokes-v1.p.rapidapi.com")
                    .header("X-RapidAPI-Key", "9d676e1c58mshbf912c7d9227473p10963cjsn771a4dce622c")
                    .header("accept", "application/json")
                    .end(function (result) {
                        console.log(result.status, result.headers, result.body);
                    });
        */

        unirest.get("http://127.0.0.1:53432/memorizador/suggestions/suggest/000121112")
        // .header("X-RapidAPI-Host", "matchilling-chuck-norris-jokes-v1.p.rapidapi.com")
        // .header("X-RapidAPI-Key", "9d676e1c58mshbf912c7d9227473p10963cjsn771a4dce622c")
            .header("Content-Type", "application/json")
            .end(function (result) {
                console.log(result.status, result.headers, result.body);
            });

    }

}
