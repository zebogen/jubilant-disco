import React from 'react';
import PropTypes from 'prop-types';
import { Message } from 'semantic-ui-react';

class FlashMessage extends React.Component {
  state = {
    show: true,
  };

  onDismiss = () => this.setState({ show: false });

  render() {
    return this.state.show
      ? <Message {...this.props} onDismiss={this.onDismiss} />
      : null;
  }
}

export default FlashMessage;
