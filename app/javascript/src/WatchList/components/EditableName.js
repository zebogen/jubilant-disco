import React from 'react';
import PropTypes from 'prop-types';
import { Header, Item } from 'semantic-ui-react';
import withMutation from 'src/shared/hoc/withMutation';

const EditableName = ({

}) => (
  <Header size="large">
    {name}
  </Header>
);
