import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card } from 'semantic-ui-react';
import AddToWatchList from '/shared/containers/AddToWatchList';
import TmdbImage from '/shared/components/TmdbImage';

const MovieResult = ({
  movie: {
    id,
    title,
    release_date,
    poster_path,
    overview,
  },
}) => (
  <Card>
    <TmdbImage path={poster_path} />
    <Card.Content>
      <Card.Header>
        <Link to={`/movies/${id}`}>{title} ({release_date})</Link>
      </Card.Header>
    </Card.Content>
    <Card.Content>
      <Card.Description>
        <p>{overview}</p>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <AddToWatchList tmdbId={id} />
    </Card.Content>
  </Card>
);

export default MovieResult;
