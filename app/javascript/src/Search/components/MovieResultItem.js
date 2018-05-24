import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Item } from 'semantic-ui-react';
import AddToWatchList from '/AddToWatchList';
import tmdbImageUrl from '/util/tmdbImageUrl';

const MovieResultItem = ({
  movie: {
    id,
    title,
    release_date,
    poster_path,
    overview,
  },
}) => (
  <Item>
    <Item.Image src={tmdbImageUrl(poster_path)} />
    <Item.Content>
      <Item.Header>
        <Link to={`/movies/${id}`}>{title} ({release_date})</Link>
      </Item.Header>
      <Item.Description>{overview}</Item.Description>
      <Item.Extra><AddToWatchList tmdbId={id} /></Item.Extra>
    </Item.Content>
  </Item>
);

MovieResultItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
  }).isRequired,
}

export default MovieResultItem;
