import React from 'react';
import PropTypes from 'prop-types';
import { Card, Loader } from 'semantic-ui-react';
import styled from 'styled-components';
import searchMovies from 'src/queries/searchMovies';
import MovieResult from 'src/Search/components/MovieResult';
import withQuery from '/shared/hoc/withQuery';

const ResultsWrapper = styled.div`
  margin-top: 2em;
`

const Results = (props) => (
  <ResultsWrapper>
    {do {
      if (props.error) {
        <p>Error :(</p>;
      } else {
        <React.Fragment>
          <h3>Results ({props.data.tmdbMovies.total_results})</h3>
          <Card.Group>
            {props.data.tmdbMovies.results.map(movie => <MovieResult key={movie.id} movie={movie} />)}
          </Card.Group>
        </React.Fragment>
      }
    }}
  </ResultsWrapper>
);

export default withQuery({
  query: searchMovies,
  variables: ({ query }) => ({ query }),
  loaderSize: 'large',
})(Results);
