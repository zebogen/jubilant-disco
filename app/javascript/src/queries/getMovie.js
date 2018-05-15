import gql from 'graphql-tag';
import WatchListMovie from '/fragments/WatchListMovie';

export default gql`
  query GetMovie($id: ID!) {
    movie(id: $id) {
      ...WatchListMovie
    }
  }
  ${WatchListMovie}
`
