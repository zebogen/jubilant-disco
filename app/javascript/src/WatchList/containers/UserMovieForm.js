import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Ref } from 'semantic-ui-react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import notificationQuery from '/queries/notification';

const mutation = gql`
  mutation UpdateUserMovie($id: ID!, $priority: Int!) {
    updateUserMovie(id: $id, priority: $priority) {
      id
      priority
    }
  }
`
export class UserMovieForm extends React.Component {
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
      update: (proxy, { data: { updateUserMovie } }) => {
        const data = proxy.readQuery({ query: notificationQuery });

        proxy.writeQuery({
          query: notificationQuery,
          data: {
            notification: {
              ...data.notification,
              show: true,
              slug: 'updateMovieSuccess',
              text: `Movie ${this.props.title} updated.`,
            },
          },
        });

        setTimeout(() => {
          const data = proxy.readQuery({ query: notificationQuery });
          proxy.writeQuery({
            query: notificationQuery,
            data: {
              notification: {
                ...data.notification,
                show: false,
              },
            },
          });
        }, 3000);
      },
      variables: {
        id: this.props.userData.id,
        priority: data.value,
      }
    });
  };

  render() {
    const {
      userData: {
        priority,
      },
    } = this.props;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Select
          label="Priority"
          onChange={this.handlePriorityChange}
          options={UserMovieForm.PRIORITY_OPTIONS}
          value={this.state.priority}
        />
      </Form>
    );
  }
}

export default graphql(mutation)(UserMovieForm);
