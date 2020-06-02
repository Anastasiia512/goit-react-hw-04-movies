import React, { Component } from 'react';
import { request } from '../../services/apiService';
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
  state = {
    moviesInTrend: [],
  };

  componentDidMount() {
    request().then(response => {
      this.setState({ moviesInTrend: response.data.results });
    });
  }

  render() {
    const { moviesInTrend } = this.state;
    return (
      <>
        <h2>Trending today</h2>
        <ul>
          {moviesInTrend.map(({ id, title }) => (
           <li key={id}><Link to={`/movies/${id}`}>{title}</Link></li> 
          ))}
        </ul>
      </>
    );
  }
}
