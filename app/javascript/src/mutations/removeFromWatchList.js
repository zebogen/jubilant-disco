import gql from 'graphql-tag'
import MovieFields from '/fragments/MovieFields'

export default gql`
  mutation removeFromWatchList($watchListId: ID!, $movieId: ID!) {
    removeFromWatchList(watchListId: $watchListId, movieId: $movieId) {
      movies {
        ...MovieFields
      }
    }
  }
  ${MovieFields}
`
