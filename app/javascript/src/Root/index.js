import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route } from 'react-router-dom';
import createClient from 'src/services/createClient';
import { ApolloProvider } from 'react-apollo';
import Home from 'src/Home';
import WatchLists from 'src/WatchLists';
import Layout from 'src/Layout';
import Search from 'src/Search';
import Movie from 'src/Movie';
import NavBar from 'src/NavBar';

const client = createClient();

const Root = ({ currentUser }) => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Layout>
        <Route path="/*" render={props => <NavBar {...props} loggedIn={!!currentUser} />} />
        <Route exact path="/" component={Home} />
        <Route path="/watchLists" component={WatchLists} />
        <Route path="/search" component={Search} />
        <Route path="/movies/:movieId" component={Movie} />
      </Layout>
    </BrowserRouter>
  </ApolloProvider>
);

Root.propTypes = {
  currentUser: PropTypes.object,
};

export default Root;
