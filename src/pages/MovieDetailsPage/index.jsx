import React, {Component} from 'react';
import {requestWithiD} from '../../services/apiService';

export default class MovieDetailsPage extends Component {
    state = {}

componentDidMount() {
requestWithiD(this.props.match.params.movieId).then()
}

    render() {
        console.log(this.props.match.params.movieId);
        return(

            <h1>MovieDetailsPage</h1>
        )
    }
}


