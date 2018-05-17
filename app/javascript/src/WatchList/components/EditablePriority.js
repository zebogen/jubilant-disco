import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import WatchListMovie from '/fragments/WatchListMovie';

const mutation = gql`
  mutation UpdateWatchListMovie($watchListMovieId: ID!, $priority: Int!) {
    updateWatchListMovie(watchListMovieId: $watchListMovieId, priority: $priority) {
      id
      priority
      movie {
        ...WatchListMovie
      }
    }
  }
  ${WatchListMovie}
`

class EditablePriority extends React.Component {
  state = {
    editing: false,
    priority: this.props.initialPriority,
  };

  render() {
    const {
      watchListMovieId,
    } = this.props;

    return (
      <Mutation mutation={mutation} variables={{ watchListMovieId,  }}>
        {(updateWatchListMovie) => (
          <div>
            Priority
          </div>
        )}
      </Mutation>
    );
  }
}

export default EditablePriority;
