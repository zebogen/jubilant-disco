import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';
import searchMovies from 'src/queries/searchMovies';
import MovieResult from 'src/Search/components/MovieResult';
import withQuery from '/shared/hoc/withQuery';

const Results = (props) => {
  console.log(props)
  return (
    <div className="search__results">
      {do {
        if (props.loading) {
          <p>Loading...</p>;
        } else if (props.error) {
          <p>Error :(</p>;
        } else {
          <Card.Group>
            {props.data.tmdbMovies.results.map(movie => <MovieResult key={movie.id} movie={movie} />)}
          </Card.Group>
        }
      }}
    </div>
  )
};

export default withQuery({
  query: searchMovies,
  variables: ({ query }) => ({ query }),
})(Results);
