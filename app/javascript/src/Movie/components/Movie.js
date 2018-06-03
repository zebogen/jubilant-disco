import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { Grid, Header } from 'semantic-ui-react';
import TmdbImage from '/shared/components/TmdbImage';
import AddToWatchList from '/AddToWatchList';

const ReleaseDate = styled('p')`
  color: slategray;
  font-size: larger;
`

const Overview = styled('p')`
  font-size: 1.1em;
`

const Movie = ({
  movie,
}) => (
  <Grid>
    <Grid.Column width={4}>
      <TmdbImage path={movie.poster_path} />
    </Grid.Column>
    <Grid.Column width={12}>
      <Header size="huge">{movie.title}</Header>
      <ReleaseDate>Released {movie.release_date}</ReleaseDate>
      <Overview>{movie.overview}</Overview>
      <AddToWatchList tmdbId={movie.tmdb_id} />
    </Grid.Column>
  </Grid>
);

Movie.propTypes = {

};

export default Movie;
