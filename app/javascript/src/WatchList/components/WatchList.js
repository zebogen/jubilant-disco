import React from 'react';
import PropTypes from 'prop-types';
import { Header, Item } from 'semantic-ui-react';
import WatchListItem from './WatchListItem';

const WatchList = ({
  id,
  name,
  movies,
}) => (
  <div>
    <Header size="large">
      {name}
    </Header>
    <Item.Group
      as={Item.Group}
      className="watch-list"
      relaxed
      divided
    >
      {movies.map(({ id: movieId, ...restMovie }, index) => (
        <WatchListItem
          key={movieId}
          id={id}
          index={index}
          movieId={movieId}
          {...restMovie}
        />
      ))}
    </Item.Group>
  </div>
);

WatchList.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  movies: PropTypes.array.isRequired,
};

export default WatchList;
