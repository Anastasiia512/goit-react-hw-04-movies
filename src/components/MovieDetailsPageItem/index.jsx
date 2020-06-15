import React from 'react';
import GenresList from '../../components/GenresList/index';
import { Link, withRouter } from 'react-router-dom';
import './movieDetailsPageItem.scss';

const BASE_URL_PIC = 'https://image.tmdb.org/t/p/w780';

const MovieDetailsPageItem = ({
  items: { poster_path, title, release_date, popularity, overview, genres },
  onGoBack,
  match,
}) => (
  <>
    <button className="goBackButton" onClick={onGoBack} type="button">
      Go back
    </button>
    <div className="movieDetailsItem">
      <img src={`${BASE_URL_PIC}${poster_path}`} alt={title} />
      <div className="mainInfo">
        <h2 className="mainInfoTitle">
          {title}({release_date})
        </h2>
        <p className="mainInfoListItem">User score: {popularity}%</p>
        <h3>Overview: </h3>
        <p>{overview}</p>
        <GenresList genres={genres} />
      </div>
    </div>
    <div className='infoList'>
      <h3>Additional information</h3>
      <ul>
        <li>
          <Link to={`${match.url}/cast/info`}>Cast</Link>
        </li>
        <li>
          <Link to={`${match.url}/reviews/info`}>Reviews</Link>
        </li>
      </ul>
    </div>
  </>
);

export default withRouter(MovieDetailsPageItem);
