import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route } from 'react-router-dom';
import createClient from 'src/services/createClient';
import { ApolloProvider } from 'react-apollo';
import Home from 'src/Home';
import WatchLists from 'src/WatchLists';
import Layout from 'src/Layout';

const client = createClient();

const Root = ({ currentUser }) => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Layout loggedIn={!!currentUser}>
        <Route exact path="/" component={Home} />
        <Route path="/watchLists" component={WatchLists} />
      </Layout>
    </BrowserRouter>
  </ApolloProvider>
);

Root.propTypes = {
  currentUser: PropTypes.object,
};

export default Root;
