import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Header } from 'semantic-ui-react';
import styled from 'styled-components';

const Bar = styled.div`
  background-color: hsl(0, 0%, 95%);
  display: flex;
  height: 2em;
  width: 100%;
`

const NavLink = styled.span`
  a {
    color: rgba(0, 0, 0, 0.87);
  }
`

const LoginButtons = styled.div`
  align-self: flex-end;
`

const SolidNavBar = ({ loggedIn, match }) => (
  <Bar>
    <NavLink>
      <Link to="/">FilmBFF</Link>
    </NavLink>
    <NavLink>
      <Link to="/watchLists">Watch Lists</Link>
    </NavLink>
    <NavLink>
      <Link to="/search">Search</Link>
    </NavLink>
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
  </Bar>
);

SolidNavBar.propTypes = {
  loggedIn: PropTypes.bool,
};

export default SolidNavBar;
