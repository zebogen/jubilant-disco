import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import withQuery from '/shared/hoc/withQuery';
import WatchList from './components/WatchList';
import getWatchList from '/queries/getWatchList';

const WatchListContainer = ({
  error,
  data,
}) => (
  error
    ? 'Error'
    : <WatchList {...data.watchList} />
);

WatchListContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      watchListId: PropTypes.string.isRequired,
    }),
  }),
};

export default withQuery({
  query: getWatchList,
  variables: ({
    match: {
      params: { watchListId },
    },
  }) => ({ id: watchListId })
})(WatchListContainer);
