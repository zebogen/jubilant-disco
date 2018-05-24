import React from 'react';
import PropTypes from 'prop-types';
import { Loader } from 'semantic-ui-react';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Loader active size="large" />
      </div>
    );
  }
}

export default Home;
