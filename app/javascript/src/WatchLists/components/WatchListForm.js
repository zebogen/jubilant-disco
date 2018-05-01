import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import createWatchList from 'src/mutations/createWatchList';
import getWatchLists from 'src/queries/getWatchLists';
import { Form, Button } from 'semantic-ui-react';

class WatchListForm extends React.Component {
  static propTypes = {
    mutate: PropTypes.func.isRequired,
  };

  state = {
    name: '',
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.mutate({
      refetchQueries: [{ query: getWatchLists }],
      variables: { name: this.state.name },
    });

    this.setState({ name: '' });
  }

  handleNameChange = event =>
    this.setState({ name: event.target.value });

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label="Name"
          onChange={this.handleNameChange}
          placeholder="Enter a name"
          value={this.state.name}
        />
        <Button type="submit">Create Watch List</Button>
      </Form>
    )
  }
}

export default graphql(createWatchList)(WatchListForm);
