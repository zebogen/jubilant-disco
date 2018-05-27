import ApolloClient from 'apollo-boost';
// import { ApolloClient } from 'apollo-client';
// import { createHttpLink } from 'apollo-link-http';
// import { InMemoryCache } from 'apollo-cache-inmemory';
// import { withClientState } from 'apollo-link-state';
import gql from 'graphql-tag';
import csrfToken from '/shared/helpers/csrfToken';


export default function createClient() {
  // const cache = new InMemoryCache();

  // const stateLink = withClientState({
  //   cache,
  //   resolvers: {}
  // })

  return new ApolloClient({
    clientState: {
      defaults: {
        notification: {
          show: false,
          text: null,
          slug: null,
          __typename: 'Notification',
        },
        searchParams: {
          query: null,
          page: 1,
          __typename: 'SearchParams',
        },
      },
    },
    headers: {
      'X-CSRF-Token': csrfToken(),
    },
  });
}
