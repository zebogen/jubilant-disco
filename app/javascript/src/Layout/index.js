import React from 'react';
import PropTypes from 'prop-types';
import { Container, Header } from 'semantic-ui-react';
import Notification from '/shared/containers/Notification';

const Layout = ({ children }) => (
  <Container>
    <Header size="huge">
      FilmBFF
    </Header>
    {children}
    <Notification />
  </Container>
);

Layout.propTypes = {
  children: PropTypes.array,
};

export default Layout;
