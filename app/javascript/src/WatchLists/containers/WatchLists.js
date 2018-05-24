import React from 'react';
import PropTypes from 'prop-types';
import withQuery from '/shared/hoc/withQuery';
import getWatchLists from 'src/queries/getWatchLists';
import WatchList from '../components/WatchList';

const WatchLists = ({
  error,
  data,
}) => (
  <div>
    {data.watchLists.map(watchList => (
      <WatchList key={watchList.id} {...watchList} />
    ))}
  </div>
);

export default withQuery({ query: getWatchLists })(WatchLists);
