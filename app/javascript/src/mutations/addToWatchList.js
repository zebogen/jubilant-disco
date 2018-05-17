import gql from 'graphql-tag';
import WatchListMovie from '/fragments/WatchListMovie';

export default gql`
  mutation addToWatchList($watchListId: ID!, $tmdbId: ID!) {
    addToWatchList(watchListId: $watchListId, tmdbId: $tmdbId) {
      id
      name
      movies {
        id
        priority
        movie {
          ...WatchListMovie
        }
      }
    }
  }
  ${WatchListMovie}
`
