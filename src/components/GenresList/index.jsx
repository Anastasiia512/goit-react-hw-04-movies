import React from 'react';
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

export default GenresList;
