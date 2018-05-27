import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route } from 'react-router-dom';
import createClient from '/services/createClient';
import { ApolloProvider } from 'react-apollo';
import Home from '/Home';
import WatchLists from '/WatchLists';
import Layout from '/Layout';
import Search from '/Search';
import Movie from '/Movie';
import NavBar from '/NavBar';
import WatchListContainer from '/WatchList';
import SignInContainer from '/SignIn';
import SignUpContainer from '/SignUp';

const client = createClient();

const Root = ({ currentUser, flash }) => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Layout flash={flash}>
        <Route path="/*" render={props => <NavBar {...props} loggedIn={!!currentUser} />} />
        <Route exact path="/" component={Home} />
        <Route exact path="/watchLists" component={WatchLists} />
        <Route path="/search" component={Search} />
        <Route path="/movies/:movieId" component={Movie} />
        <Route path="/watchLists/:watchListId" component={WatchListContainer} />
        <Route path="/users/sign_in" component={SignInContainer} />
        <Route path="/users/sign_up" component={SignUpContainer} />
      </Layout>
    </BrowserRouter>
  </ApolloProvider>
);

Root.propTypes = {
  currentUser: PropTypes.object,
};

export default Root;
