import gql from 'graphql-tag';
import MovieFields from '/fragments/MovieFields';

export default gql`
  fragment WatchListFields on WatchList {
    id
    name
    notes
    movies {
      ...MovieFields
    }
  }
  ${MovieFields}
`;
