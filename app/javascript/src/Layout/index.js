import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Header, Menu } from 'semantic-ui-react';

const Layout = ({ children, loggedIn }) => (
  <Container>
    <Header size="huge">
      FilmBFF
    </Header>

    <Menu pointing secondary>
      <Menu.Item
        name="home"
        active={true}
      >
        Home
      </Menu.Item>
      <Menu.Item
        name="watchlists"
        active={false}
      >
        <Link to="/watchLists">Watch Lists</Link>
      </Menu.Item>
      <Menu.Item
        name="search"
        active={false}
      >
        <Link to="/search">Search</Link>
      </Menu.Item>
      {!loggedIn && (
        <Menu.Menu>
          <Menu.Item name="signin" active={false} link>
            <a href="/users/sign_in">Sign In</a>
          </Menu.Item>
          <Menu.Item name="signup" active={false} link>
            <a href="/users/sign_up">Sign Up</a>
          </Menu.Item>
        </Menu.Menu>
      )}
    </Menu>
    {children}
  </Container>
);

Layout.propTypes = {
  loggedIn: PropTypes.bool,
};

export default Layout;
