import gql from 'graphql-tag';

export default id => gql`
  {
    movie(id: ${id}) {
      id
      tmdb_id
      title
      overview
      release_date
      poster_path
    }
  }
`
