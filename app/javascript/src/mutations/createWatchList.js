import gql from 'graphql-tag';

export default gql`
  mutation createWatchList($name: String!, $notes: String) {
    createWatchList(name: $name, notes: $notes) {
      id
      name
      notes
    }
  }
`
