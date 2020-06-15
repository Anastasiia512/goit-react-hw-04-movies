import React from 'react';
import './reviewsItem.scss';

const ReviewsItem = ({ reviews }) =>
  reviews.map(({ author, content, id }) => (
    <li className='reviewsItem' key={id}>
      <p>Author: {author}</p>
      <p>{content}</p>
    </li>
  ));

export default ReviewsItem;
