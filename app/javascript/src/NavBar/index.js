import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import styled from 'styled-components';

const Logo = styled.span`
  font-size: 2em;
`

const NavLink = styled.span`
  a {
    color: hsl(0, 0%, 80%);
  }
`

const Bar = styled.div`
  background: hsl(0, 0%, 20%) !important;
`

const NavBar = ({ loggedIn, match }) => (
  <Menu inverted>
    <Menu.Item>
      <Link to="/">
        <Logo>FilmBFF</Logo>
      </Link>
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
