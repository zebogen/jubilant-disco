import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import getWatchLists from 'src/queries/getWatchLists';
import WatchListForm from 'src/WatchLists/components/WatchListForm';

const WatchLists = () => (
  <div className="watchLists">
    <Query query={getWatchLists}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        return data.watch_lists.map(({ id, name, movies }) => (
          <div key={id}>
            <p>Name: {name}</p>
            <p>Movies: </p>
            <ul>
              {movies.map(({ id, title }) => <li key={id}>{title}</li>)}
            </ul>
          </div>
        ))
      }}
    </Query>

    <h3>Create a watch list</h3>
    <WatchListForm />
  </div>
);

export default WatchLists;
