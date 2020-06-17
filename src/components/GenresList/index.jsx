import React from 'react';
import propTypes from 'prop-types';
import './genresList.scss';

const GenresList = ({ genres }) => (
 <>
 <h3 className="genresTitle">Genres:</h3>
 <ul className="genresList">
    {genres &&
      genres.map(({ id, name }) => (
        <li className="genresItem" key={id}>
          {name}
        </li>
      ))}
  </ul>
  </>
);

GenresList.propTypes = {
  genres: propTypes.arrayOf(propTypes.shape({
    id: propTypes.number.isRequired,
    name: propTypes.string.isRequired,
  }))
}

export default GenresList;
