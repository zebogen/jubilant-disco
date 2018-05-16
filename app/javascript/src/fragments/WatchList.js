import gql from 'graphql-tag';
import WatchListMovie from '/fragments/WatchListMovie';

export default gql`
  fragment WatchListFields on WatchList {
    id
    name
    movies {
      ...WatchListMovie
    }
  }
  ${WatchListMovie}
`;
