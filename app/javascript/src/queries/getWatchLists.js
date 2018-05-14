import gql from 'graphql-tag';
import WatchListMovie from '/fragments/WatchListMovie';

const getWatchLists = gql`
  {
    watchLists {
      id
      name
      movies {
        ...WatchListMovie
      }
    }
  }
  ${WatchListMovie}
`

export default getWatchLists;
