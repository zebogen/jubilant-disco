import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, Popup } from 'semantic-ui-react';
import truncate from 'lodash/truncate';
import AddToWatchList from '/AddToWatchList';
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
        {overview.length >= 150
          ? (
            <Popup trigger={<span>{truncate(overview, { length: 150 })}</span>}>
              <Popup.Content>
                {overview}
              </Popup.Content>
            </Popup>
          )
          : overview}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <AddToWatchList tmdbId={id} />
    </Card.Content>
  </Card>
);

MovieResult.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
  }).isRequired,
}

export default MovieResult;
