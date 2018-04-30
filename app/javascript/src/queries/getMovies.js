import gql from 'graphql-tag';

const getMovies = gql`
  {
    movies {
      id
      title
    }
  }
`

export default getMovies;
