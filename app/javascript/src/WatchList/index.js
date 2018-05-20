import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import WatchList from './components/WatchList';
import getWatchList from '/queries/getWatchList';

const WatchListContainer = ({
  match: {
    params: { watchListId },
  },
}) => (
  <Query query={getWatchList} variables={{ id: watchListId }}>
    {({ loading, error, data }) => (
      loading
        ? 'Loading'
        : error
          ? 'Error'
          : <WatchList {...data.watchList} />
    )}
  </Query>
);

WatchListContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      watchListId: PropTypes.string.isRequired,
    }),
  }),
};

export default WatchListContainer;
