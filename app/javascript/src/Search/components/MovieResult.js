import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AddToWatchList from 'src/Search/components/AddToWatchList';

const MovieResult = ({
  movie: {
    id,
    title,
    release_date,
    overview,
  },
}) => (
  <div className="search__results__item">
    <Link to={`/movies/${id}`}>{title} ({release_date})</Link>
    <p>{overview}</p>
    <AddToWatchList tmdbId={id} />
  </div>
);

export default MovieResult;
