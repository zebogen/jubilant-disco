import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react';

const AddToWatchListDropdown = ({
  loading,
  options,
  saving,
  handleOptionClick,
}) => (
  <Dropdown
    disabled={loading || saving}
    text="Add to Watch List"
    icon="plus square"
    button
    labeled
    className="icon"
    loading={loading}
  >
    <Dropdown.Menu>
      <Dropdown.Header icon="list" content="Select a list" />
      {options.map(({ text, value }) => (
        <Dropdown.Item key={value} value={value} onClick={handleOptionClick}>
          {text}
        </Dropdown.Item>
      ))}
    </Dropdown.Menu>
  </Dropdown>
);

AddToWatchListDropdown.propTypes = {
  saving: PropTypes.bool,
  loading: PropTypes.bool,
  options: PropTypes.bool.isRequired,
  handleOptionClick: PropTypes.bool.isRequired,
};

export default AddToWatchListDropdown;
