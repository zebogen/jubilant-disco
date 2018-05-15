import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import getWatchLists from '/queries/getWatchLists';
import AddToWatchListForm from './AddToWatchListForm';
import { Loader } from 'semantic-ui-react';

const AddToWatchList = ({ tmdbId }) => (
  <Query query={getWatchLists}>
    {({ loading, error, data: { watchLists } }) => (
      loading
        ? <Loader active />
        : error
            ? 'Something went wrong'
            : <AddToWatchListForm watchLists={watchLists} tmdbId={tmdbId} />
    )}
  </Query>
);

export default AddToWatchList;
