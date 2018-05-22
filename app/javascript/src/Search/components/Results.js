import React from 'react';
import PropTypes from 'prop-types';
import { Card, Item } from 'semantic-ui-react';
import styled from 'styled-components';
import searchMovies from 'src/queries/searchMovies';
import MovieResult from 'src/Search/components/MovieResult';
import MovieResultItem from 'src/Search/components/MovieResultItem';
import withQuery from '/shared/hoc/withQuery';

const ResultsWrapper = styled.div`
  margin-top: 2em;
`

const Results = ({
  loading,
  error,
  data,
}) => (
  <ResultsWrapper>
    {do {
      if (error) {
        <p>Error :(</p>;
      } else {
        <React.Fragment>
          <h3>Results ({data.tmdbMovies.total_results})</h3>
          <Item.Group divided relaxed>
            {data.tmdbMovies.results.map(movie => <MovieResultItem key={movie.id} movie={movie} />)}
          </Item.Group>
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
