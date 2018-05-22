import React from 'react';
import PropTypes from 'prop-types';
import getWatchLists from '/queries/getWatchLists';
import AddToWatchListForm from './AddToWatchListForm';
import withQuery from '/shared/hoc/withQuery';

const AddToWatchList = ({ loading, error, data, ...restProps }) => (
  error
    ? 'Something went wrong'
    : <AddToWatchListForm queryLoading={loading} watchLists={data.watchLists} {...restProps} />
);

export default withQuery({ query: getWatchLists })(AddToWatchList);
