import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import styled from 'styled-components';

const NavLink = styled.span`
  a {
    color: rgba(0, 0, 0, 0.87);
  }
`

const NavBar = ({ loggedIn, match }) => (
  <Menu pointing secondary>
    <Menu.Item
      name="home"
      active={match.url === '/'}
    >
      <NavLink>
        <Link to="/">Home</Link>
      </NavLink>
    </Menu.Item>
    <Menu.Item
      name="watchlists"
      active={match.url === '/watchLists'}
    >
      <NavLink>
        <Link to="/watchLists">Watch Lists</Link>
      </NavLink>
    </Menu.Item>
    <Menu.Item
      name="search"
      active={match.url === '/search'}
    >
      <NavLink>
        <Link to="/search">Search</Link>
      </NavLink>
    </Menu.Item>
    {!loggedIn && (
      <Menu.Menu>
        <Menu.Item name="signin" active={false} link>
          <NavLink>
            <Link to="/users/sign_in">Sign In</Link>
          </NavLink>
        </Menu.Item>
        <Menu.Item name="signup" active={false} link>
          <Link to="/users/sign_up">Sign Up</Link>
        </Menu.Item>
      </Menu.Menu>
    )}
  </Menu>
);

NavBar.propTypes = {
  loggedIn: PropTypes.bool,
};

export default NavBar;
