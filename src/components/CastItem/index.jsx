import React from 'react';
import propTypes from 'prop-types';
import './castItem.scss';
const BASE_URL_PIC = 'https://image.tmdb.org/t/p/w780';

const CastItem = ({ cast }) =>
  cast.map(({ cast_id, profile_path, character, name }) => (
    <li className='castItem' key={cast_id}>
      {profile_path ? (
        <img className='castItemImg' alt={character} src={`${BASE_URL_PIC}${profile_path}`} />
      ) : (
        <span>{name}</span>
      )}
      <p>Name: {name}</p>
      <p>Character: {character}</p>
    </li>
  ));

  CastItem.defaultProps ={
    cast: [],
  }

  CastItem.propTypes = {
    cast: propTypes.arrayOf(
      propTypes.shape({
      cast_id: propTypes.number.isRequired,
      profile_path: propTypes.string.isRequired,
      character: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      })
    )
  }

export default CastItem;
