import React from 'react';
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const WatchList = ({
  id,
  name,
}) => (
  <div>
    <Header size="large">
      <Link to={`/watchLists/${id}`}>{name}</Link>
    </Header>
  </div>
);

export default WatchList;
