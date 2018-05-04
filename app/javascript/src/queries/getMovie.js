import gql from 'graphql-tag';

export default gql`
  query GetMovie($id: ID!) {
    getMovie(id: $id) {
      id
      tmdb_id
      title
      overview
      release_date
      poster_path
    }
  }
`
