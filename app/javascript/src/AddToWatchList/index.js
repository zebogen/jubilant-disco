import React from 'react';
import PropTypes from 'prop-types';
import getWatchLists from '/queries/getWatchLists';
import AddToWatchListForm from './AddToWatchListForm';
import withQuery from '/shared/hoc/withQuery';

const AddToWatchList = ({ loading, error, data, tmdbId }) => (
  error
    ? 'Something went wrong'
    : <AddToWatchListForm loading={loading} watchLists={data.watchLists} tmdbId={tmdbId} />
);

export default withQuery({ query: getWatchLists })(AddToWatchList);
