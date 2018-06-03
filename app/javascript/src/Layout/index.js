import React from 'react';
import PropTypes from 'prop-types';
import { Container, Header } from 'semantic-ui-react';
import { Route } from 'react-router-dom';
import styled from 'react-emotion';
import Notification from '/Notification';
import Flash from '/Flash';
import NavBar from '/NavBar';

const Logo = styled('header')`
  font-size: 2em;
  margin-top: 1em;
`

const Content = styled('div')`

`

const Layout = ({ children, currentUser, flash }) => (
  <React.Fragment>
    <Route path="/*" render={props => <NavBar {...props} loggedIn={!!currentUser} />} />
    <Container>
      <Flash flash={flash} />
      {children}
      <Notification />
    </Container>
  </React.Fragment>
);

Layout.propTypes = {
  children: PropTypes.array,
  currentUser: PropTypes.object,
  flash: PropTypes.object,
};

export default Layout;
