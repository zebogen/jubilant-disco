import React from 'react';
import PropTypes from 'prop-types';

const Movie = ({
  movie,
}) => (
  <div className="movie">
    <h4>{movie.title} {movie.release_date}</h4>
    <img src={movie.poster_path} />
    <p>{movie.overview}</p>
  </div>
);

Movie.propTypes = {
  movie: PropTypes.object,
};

export default Movie;
