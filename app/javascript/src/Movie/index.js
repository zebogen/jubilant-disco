import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import getMovie from 'src/queries/getMovie';
import TmdbImage from 'src/shared/components/TmdbImage';
import Movie from './components/Movie';

const MovieContainer = ({
  match,
}) => (
  <Query query={getMovie} variables={{ id: match.params.movieId }}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return <Movie movie={data.movie} />;
    }}
  </Query>
);

MovieContainer.propTypes = {
  // movieId: PropTypes.number.isRequired,
};

export default MovieContainer;
