import React, { Component } from 'react';
import { castRequest } from '../../services/apiService';

class Cast extends Component {
  state = {
    cast: [],
  };

  componentDidMount() {
    const id = this.props.match.params.movieId;
    castRequest(id).then(data => console.log(data));
  }

  render() {
    const { cast } = this.state;
    return (
      <>
        <ul className="castList">{/* <CastItem cast={cast} /> */}</ul>
      </>
    );
  }
}
export default Cast;
