import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const NavBar = ({ loggedIn, match }) => (
  <Menu pointing secondary>
    <Menu.Item
      name="home"
      active={match.url === '/'}
    >
      <Link to="/">Home</Link>
    </Menu.Item>
    <Menu.Item
      name="watchlists"
      active={match.url === '/watchLists'}
    >
      <Link to="/watchLists">Watch Lists</Link>
    </Menu.Item>
    <Menu.Item
      name="search"
      active={match.url === '/search'}
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
);

NavBar.propTypes = {
  loggedIn: PropTypes.bool,
};

export default NavBar;
