import gql from 'graphql-tag';
import MovieFields from '/fragments/MovieFields';

export default gql`
  mutation addToWatchList($watchListId: ID!, $tmdbId: ID!) {
    addToWatchList(watchListId: $watchListId, tmdbId: $tmdbId) {
      id
      name
      movies {
        ...MovieFields
      }
    }
  }
  ${MovieFields}
`
