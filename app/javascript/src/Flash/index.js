import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import FlashMessage from './FlashMessage';

const Flash = ({ flash }) => (
  <React.Fragment>
    {map(flash, (message, type) => (
      <FlashMessage
        info={type === 'info'}
        error={type === 'error'}
        success={type === 'success'}
        content={message}
      />
    ))}
  </React.Fragment>
);

Flash.propTypes = {
  flash: PropTypes.object.isRequired,
};

export default Flash;
