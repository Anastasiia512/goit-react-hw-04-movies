import React, { Component } from 'react';
import { reviewsRequest } from '../../services/apiService';
import ReviewsItem from '../../components/ReviewsItem/index';

export default class ReviewsPage extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    const id = this.props.match.params.movieId;
    reviewsRequest(id).then(response =>
      this.setState({ reviews: [...response.data.results] }),
    );
  }

  render() {
    const { reviews } = this.state;
    return (
      <>
        <ul>
          {reviews.length ? (
            <ReviewsItem reviews={reviews} />
          ) : (
            <p>No reviews for this movie</p>
          )}
        </ul>
      </>
    );
  }
}
