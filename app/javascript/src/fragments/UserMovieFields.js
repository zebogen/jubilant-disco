import gql from 'graphql-tag';

export default gql`
  fragment UserMovieFields on UserMovie {
    id
    movie_id
    user_id
    priority
    notes
    watched
  }
`
