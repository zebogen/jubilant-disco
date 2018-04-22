import React from 'react';
import PropTypes from 'prop-types';
import { Container, Header, Menu } from 'semantic-ui-react';

class HomeContainer extends React.Component {
  state = {
    foo: "bar",
  };

  render() {
    return (
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
            Watch Lists
          </Menu.Item>
          <Menu.Menu>
            <Menu.Item name="signin" active={false} link>
              <a href="/users/sign_in">Sign In</a>
            </Menu.Item>
            <Menu.Item name="signup" active={false} link>
              <a href="/users/sign_up">Sign Up</a>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Container>
    );
  }
}

export default HomeContainer;
