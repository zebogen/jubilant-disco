import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import createNotification from '/shared/helpers/createNotification';
import RemoveButton from '../components/RemoveButton';

const mutation = gql`
  mutation UpdateUserMovie($id: ID!, $priority: Int!) {
    updateUserMovie(id: $id, priority: $priority) {
      id
      priority
    }
  }
`
export class UserMovieForm extends React.Component {
  static propTypes = {
    movieId: PropTypes.string.isRequired,
    mutate: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    userData: PropTypes.shape({
      id: PropTypes.string,
      priority: PropTypes.number,
    }),
    watchListId: PropTypes.string.isRequired,
  }

  static PRIORITY_OPTIONS = [
    { key: 1, text: '1', value: 1 },
    { key: 2, text: '2', value: 2 },
    { key: 3, text: '3', value: 3 },
    { key: 4, text: '4', value: 4 },
    { key: 5, text: '5', value: 5 },
  ];

  state = {
    priority: this.props.userData.priority,
  };

  handlePriorityChange = (_event, data) => {
    this.setState({ priority: data.value });

    this.props.mutate({
      update: cache => (
        createNotification({
          cache,
          slug: 'updateMovieSuccess',
          text: `${this.props.title} updated.`,
        })
      ),
      variables: {
        id: this.props.userData.id,
        priority: data.value,
      }
    });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Select
          label="Priority"
          onChange={this.handlePriorityChange}
          options={UserMovieForm.PRIORITY_OPTIONS}
          placeholder="Set a priority value"
          value={this.state.priority}
        />
        <RemoveButton
          watchListId={this.props.watchListId}
          movieId={this.props.movieId}
          title={this.props.title}
        />
      </Form>
    );
  }
}

export default graphql(mutation)(UserMovieForm);
