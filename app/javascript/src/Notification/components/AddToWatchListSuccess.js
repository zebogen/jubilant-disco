import React from 'react';
import PropTypes from 'prop-types';
import { Message } from 'semantic-ui-react';

const AddToWatchListSuccess = ({
  message,
  ...restProps
}) => (
  <Message
    positive
    header="Added!"
    content={message}
    {...restProps}
  />
);

AddToWatchListSuccess.propTypes = {
  message: PropTypes.string.isRequired,
  onDismiss: PropTypes.func.isRequired,
};

export default AddToWatchListSuccess;
