import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Modal } from 'semantic-ui-react';

const query = gql`
  {
    user
  }
`

class AddedToWatchListModal extends React.Component {
  render() {
    return (
      <Modal open>

      </Modal>
    );
  }
}

export default AddedToWatchListModal;
