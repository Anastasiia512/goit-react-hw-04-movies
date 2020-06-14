import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { requestWithQuery } from '../../services/apiService';
import './moviesPage.scss';

export default class MoviesPage extends Component {
  state = {
    query: '',
    moviesByQuery: [],
  };

  handleChange = ({ target: { value } }) =>
    this.setState({
      query: value,
    });

  handleSubmit = e => {
    e.preventDefault();
    requestWithQuery(this.state.query).then(response =>
      this.setState({ moviesByQuery: [...response.data.results] }),
    );
    this.setState({
      query: '',
    });
  };

  render() {
    const { query, moviesByQuery } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            className="contactFormInput"
            type="text"
            required
            name="name"
            value={query}
            onChange={this.handleChange}
          />
          <button className='searchButton' type="submit">Search</button>
        </form>
        <ul>
          {!!moviesByQuery &&
            moviesByQuery.map(({ id, title }) => (
              <li key={id}>
                <Link to={`/movies/${id}`}>{title}</Link>
              </li>
            ))}
        </ul>
      </>
    );
  }
}
