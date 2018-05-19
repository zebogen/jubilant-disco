import gql from 'graphql-tag';
import WatchListFields from '/fragments/WatchListFields';

const getWatchLists = gql`
  {
    watchLists {
      ...WatchListFields
    }
  }
  ${WatchListFields}
`

export default getWatchLists;
