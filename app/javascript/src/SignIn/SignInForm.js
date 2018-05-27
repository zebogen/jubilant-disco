import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'semantic-ui-react';
import csrfToken from '/shared/helpers/csrfToken';

class SignInForm extends React.PureComponent {
  _token = csrfToken();

  render() {
    return (
      <Form action="/users/sign_in" method="post">
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
        <Form.Checkbox
          label="Remember me"
          name="user[remember_me]"
        />
        <Button type="submit">
          Log in
        </Button>
      </Form>
    );
  }
}

export default SignInForm;
