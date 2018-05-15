import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import { Card } from 'semantic-ui-react';
import searchMovies from 'src/queries/searchMovies';
import MovieResult from 'src/Search/components/MovieResult';

const Results = ({
  data: {
    loading,
    error,
    tmdbMovies,
  },
}) => {
  return (
    <div className="search__results">
      {do {
        if (loading) {
          <p>Loading...</p>;
        } else if (error) {
          <p>Error :(</p>;
        } else {
          <Card.Group>
            {tmdbMovies.results.map(movie => <MovieResult key={movie.id} movie={movie} />)}
          </Card.Group>
        }
      }}
    </div>
  )
};

export default graphql(
  searchMovies,
  {
    options: props => ({
      variables: {
        query: props.query,
      },
    }),
  }
)(Results);
