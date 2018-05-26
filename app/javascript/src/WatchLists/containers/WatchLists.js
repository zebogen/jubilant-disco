import React from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { Item } from 'semantic-ui-react';
import withQuery from '/shared/hoc/withQuery';
import WatchList from '../components/WatchList';

const WatchLists = ({
  error,
  data,
}) => (
  <Item.Group divided relaxed>
    {data.watchLists.map(watchList => (
      <WatchList key={watchList.id} {...watchList} />
    ))}
  </Item.Group>
);

export default withQuery({
  query: gql`
    {
      watchLists {
        id
        name
        notes
        movies {
          poster_path
        }
      }
    }
  `
})(WatchLists);
