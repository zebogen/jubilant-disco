import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import { css } from 'react-emotion';

const Logo = css`
  color: hsl(0, 0%, 20%);
  font-size: ${20 / 14}em;
`

const NavLink = css`
  color: hsl(0, 0%, 20%);
`

const NavBar = ({ loggedIn, match }) => (
  <Menu>
    <Menu.Item>
      <Link to="/" className={Logo}>
        FilmBFF
      </Link>
    </Menu.Item>
    <Menu.Item
      name="watchlists"
      active={match.url === '/watchLists'}
    >
      <Link to="/watchLists" className={NavLink}>Watch Lists</Link>
    </Menu.Item>
    <Menu.Item
      name="search"
      active={match.url === '/search'}
    >
      <Link to="/search" className={NavLink}>Search</Link>
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
