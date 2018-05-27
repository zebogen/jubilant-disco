import React from 'react';
import PropTypes from 'prop-types';
import { Container, Header } from 'semantic-ui-react';
import Notification from '/Notification';
import Flash from '/Flash';
import styled from 'styled-components';

const Logo = styled.header`
  font-size: 2em;
  margin-top: 1em;
`

const Layout = ({ children, flash }) => (
  <Container>
    <Flash flash={flash} />
    <Logo>
      <Header>
        FilmBFF
      </Header>
    </Logo>
    {children}
    <Notification />
  </Container>
);

Layout.propTypes = {
  children: PropTypes.array,
  flash: PropTypes.object,
};

export default Layout;
