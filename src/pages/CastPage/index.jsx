import React, { Component } from 'react';
import CastItem from '../../components/CastItem/index';
import { castRequest } from '../../services/apiService';

export default class Cast extends Component {
  state = {
    cast: [],
  };

  componentDidMount() {
    const id = this.props.match.params.movieId;
    castRequest(id)
      .then(responce => this.setState({ cast: [...responce.data.cast] }))
      .then(error => console.log(error));
  }

  render() {
    const { cast } = this.state;

    return (
      <>
        <ul className="castList">{cast && <CastItem cast={cast} />}</ul>
      </>
    );
  }
}
