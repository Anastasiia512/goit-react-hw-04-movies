import React, { Component } from 'react';
import { request } from '../../services/apiService';

export default class MoviesPage extends Component {
  state = {
    query: '',
  };

  handleChange = ({ target: { value } }) =>
    this.setState({
      query: value,
    });

  handleSubmit = e => {
    e.preventDefault();
    request(this.state.query).then(results => console.log(results));
    this.setState({
      query: '',
    });
  };

  render() {
    const { query } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className="contactFormInput"
          type="text"
          required
          name="name"
          value={query}
          onChange={this.handleChange}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}
