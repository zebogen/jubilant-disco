import gql from 'graphql-tag';

const getWatchLists = gql`
  {
    watch_lists {
      id
      name
      movies {
        id
        title
      }
    }
  }
`

export default getWatchLists;
