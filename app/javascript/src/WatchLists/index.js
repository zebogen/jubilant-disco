import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import getWatchLists from 'src/queries/getWatchLists';
import WatchListForm from 'src/WatchLists/components/WatchListForm';
import WatchList from './components/WatchList';

const WatchLists = () => (
  <div className="watchLists">
    <Query query={getWatchLists}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        return data.watchLists.map(watchList => (
          <WatchList key={watchList.id} {...watchList} />
        ));
      }}
    </Query>

    <h3>Create a watch list</h3>
    <WatchListForm />
  </div>
);

export default WatchLists;
