import gql from 'graphql-tag';
import WatchListFields from '/fragments/WatchListFields';

export default gql`
  query GetWatchList($id: ID!) {
    watchList(id: $id) {
      ...WatchListFields
    }
  }
  ${WatchListFields}
`;
