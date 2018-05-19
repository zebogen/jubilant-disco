import gql from 'graphql-tag';
import MovieFields from '/fragments/MovieFields'

export default gql`
  query GetMovie($id: ID!) {
    movie(id: $id) {
      ...MovieFields
    }
  }
  ${MovieFields}
`
