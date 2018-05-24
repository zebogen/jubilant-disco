import React from 'react';
import WatchListForm from 'src/WatchLists/components/WatchListForm';
import WatchLists from './containers/WatchLists';

const WatchListsView = () => (
  <div>
    <WatchLists />
    <h3>Create a watch list</h3>
    <WatchListForm />
  </div>
);

export default WatchListsView;
