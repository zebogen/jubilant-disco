import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import getMovie from 'src/queries/getMovie';
import TmdbImage from 'src/shared/components/TmdbImage';

const Movie = ({
  match,
}) => (
  <Query query={getMovie(match.params.movieId)}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return (
        <div className="movie">
          <h4>{data.movie.title} {data.movie.release_date}</h4>
          <TmdbImage path={data.movie.poster_path} />
          <p>{data.movie.overview}</p>
        </div>
      )
    }}
  </Query>
);

Movie.propTypes = {
  // movieId: PropTypes.number.isRequired,
};

export default Movie;
