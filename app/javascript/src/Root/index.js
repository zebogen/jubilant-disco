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
import WatchListContainer from '/WatchList';
import SignInContainer from '/SignIn';
import SignUpContainer from '/SignUp';

const client = createClient();

const Root = ({ currentUser, flash }) => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <React.Fragment>
        <Layout currentUser={currentUser} flash={flash}>
          <Route exact path="/" component={Home} />
          <Route exact path="/watchLists" component={WatchLists} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/movies/:movieId" component={Movie} />
          <Route exact path="/watchLists/:watchListId" component={WatchListContainer} />
          <Route exact path="/users/sign_in" component={SignInContainer} />
          <Route exact path="/users/sign_up" component={SignUpContainer} />
        </Layout>
      </React.Fragment>
    </BrowserRouter>
  </ApolloProvider>
);

Root.propTypes = {
  currentUser: PropTypes.object,
  flash: PropTypes.object,
};

export default Root;
