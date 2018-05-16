import gql from 'graphql-tag';
import WatchListFields from '/fragments/WatchList';

const getWatchLists = gql`
  {
    watchLists {
      ...WatchListFields
    }
  }
  ${WatchListFields}
`

export default getWatchLists;
