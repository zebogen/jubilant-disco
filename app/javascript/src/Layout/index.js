import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import { Container, Header, Message } from 'semantic-ui-react';
import Notification from '/Notification';
import Flash from '/Flash';

const Layout = ({ children, flash }) => (
  <Container>
    <Flash flash={flash} />
    <Header size="huge">
      FilmBFF
    </Header>
    {children}
    <Notification />
  </Container>
);

Layout.propTypes = {
  children: PropTypes.array,
  flash: PropTypes.object,
};

export default Layout;
