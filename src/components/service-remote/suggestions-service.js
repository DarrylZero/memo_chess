import React, {Component} from 'react'
import './suggestions-service.css'

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
        const fullUri = `http://127.0.0.1:53432/memorizador/suggestions/suggest/000121112`;

        fetch(fullUri)
            // .then(response => {
            //     return response.json()
            // })
            .then(data => {
                console.log('data ');

                // this.setState({data})
            }).catch((e) => {
                debugger;
                console.log('rejected ');

            }

            );


    }

}
