import React from 'react';
import propTypes from 'prop-types';
import './reviewsItem.scss';

const ReviewsItem = ({ reviews }) =>
  reviews.map(({ author, content, id }) => (
    <li className="reviewsItem" key={id}>
      <p>Author: {author}</p>
      <p>{content}</p>
    </li>
  ));

ReviewsItem.defaultProps = {
  reviews: [],
};

ReviewsItem.propTypes = {
  reviews: propTypes.arrayOf(
    propTypes.shape({
      author: propTypes.string.isRequired,
      content: propTypes.string.isRequired,
      id: propTypes.number.isRequired,
    }),
  ),
};

export default ReviewsItem;
