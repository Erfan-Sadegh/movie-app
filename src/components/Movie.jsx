import React from 'react';
import { IMG_API } from '../api/requests';

function Movie({ title, poster_path, overview, vote_average }) {
  return (
    <div className='movie'>
      <img src={poster_path && `${IMG_API}${poster_path}`} alt={title} />

      <div className='movie-info'>
        <h3>{title}</h3>
        <span>{vote_average}</span>
      </div>

      <div className='movie-overlay'>
        <h3>Overview : </h3>
        <p>{overview}</p>
      </div>
    </div>
  );
}

export default Movie;
