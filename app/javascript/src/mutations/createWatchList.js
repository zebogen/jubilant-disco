import gql from 'graphql-tag';

export default gql`
  mutation create_watch_list($name: String!) {
    create_watch_list(name: $name) {
      id
      name
    }
  }
`
