import ApolloClient from 'apollo-boost';
// import { ApolloClient } from 'apollo-client';
// import { createHttpLink } from 'apollo-link-http';
// import { InMemoryCache } from 'apollo-cache-inmemory';
// import { withClientState } from 'apollo-link-state';
import gql from 'graphql-tag';

const getMovies = gql`
  {
    movies {
      id
      title
    }
  }
`

export default function createClient() {
  // const cache = new InMemoryCache();

  // const stateLink = withClientState({
  //   cache,
  //   resolvers: {}
  // })

  return new ApolloClient({
    // cache,
    clientState: {},
    headers: {
      'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').content
    },
    // link: createHttpLink({
    //   uri: '/graphql',
    //   credentials: 'same-origin',
    //   headers: {
    //     'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').content
    //   },
    // }),
  });
}
