import gql from 'graphql-tag';

export default gql`
  mutation createWatchList($name: String!) {
    createWatchList(name: $name) {
      id
      name
    }
  }
`
