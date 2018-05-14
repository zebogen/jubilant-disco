import gql from 'graphql-tag';

export default gql`
  mutation addToWatchList($watchListId: ID!, $tmdbId: ID!) {
    addToWatchList(watchListId: $watchListId, tmdbId: $tmdbId) {
      id
      name
      movies {
        tmdb_id
      }
    }
  }
`
