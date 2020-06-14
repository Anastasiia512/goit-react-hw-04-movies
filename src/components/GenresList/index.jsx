import React from 'react';

const GenresList = ({ genres }) => (
 <>
 <h3>Genres: </h3>
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
