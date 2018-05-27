import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'semantic-ui-react';
import csrfToken from '/shared/helpers/csrfToken';

class SignUpForm extends React.PureComponent {
  _token = csrfToken();

  render() {
    return (
      <Form action="/users" method="post">
        <input type="hidden" name="authenticity_token" value={this._token} />
        <Form.Input
          label="Email"
          name="user[email]"
          placeholder="Enter your email address"
          width={8}
        />
        <Form.Input
          label="Password"
          name="user[password]"
          placeholder="Enter a password"
          type="password"
          width={8}
        />
        <Form.Input
          label="Confirm Password"
          name="user[password_confirmation]"
          placeholder="Enter password again"
          type="password"
          width={8}
        />
        <Button type="submit">
          Sign up
        </Button>
      </Form>
    );
  }
}

export default SignUpForm;
