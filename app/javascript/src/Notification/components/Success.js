import React from 'react';
import PropTypes from 'prop-types';
import { Message } from 'semantic-ui-react';

const Success = ({
  message,
  ...restProps
}) => (
  <Message
    positive
    content={message}
    {...restProps}
  />
);

Success.propTypes = {
  message: PropTypes.string.isRequired,
  onDismiss: PropTypes.func.isRequired,
};

export default Success;
