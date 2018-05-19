import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import WatchList from './components/WatchList';
import WatchListFields from '/fragments/WatchListFields';

const query = gql`
  query GetWatchList($id: ID!) {
    watchList(id: $id) {
      ...WatchListFields
    }
  }
  ${WatchListFields}
`

const WatchListContainer = ({
  match: { params: { watchListId } },
}) => (
  <Query query={query} variables={{ id: watchListId }}>
    {({ loading, error, data }) => (
      loading
        ? 'Loading'
        : error
          ? 'Error'
          : <WatchList {...data.watchList} />
    )}
  </Query>
);

export default WatchListContainer;
