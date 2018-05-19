import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const mutation = gql`
  mutation UpdateUserMovie($UserMovieId: ID!, $priority: Int!) {
    updateUserMovie(UserMovieId: $UserMovieId, priority: $priority) {
      id
      priority
    }
  }
`

class EditablePriority extends React.Component {
  state = {
    editing: false,
    priority: this.props.initialPriority,
  };

  render() {
    const {
      userMovieId,
    } = this.props;

    return (
      <Mutation mutation={mutation} variables={{ userMovieId,  }}>
        {(updateUserMovie) => (
          <div>
            Priority
          </div>
        )}
      </Mutation>
    );
  }
}

export default EditablePriority;
