import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import createWatchList from 'src/mutations/createWatchList';
import getWatchLists from 'src/queries/getWatchLists';
import { Form, Button } from 'semantic-ui-react';
import createNotification from '/shared/helpers/createNotification';

class WatchListForm extends React.Component {
  static propTypes = {
    mutate: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    notes: '',
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.mutate({
      refetchQueries: [{ query: getWatchLists }],
      variables: { name: this.state.name, notes: this.state.notes },
      update: cache => (
        createNotification({
          cache,
          slug: 'success',
          text: 'Watch list created!'
        })
      ),
    });

    this.setState({ name: '', notes: '' });
  }

  inputChangeHandler = field => event =>
    this.setState({ [field]: event.target.value });

  handleNameChange = this.inputChangeHandler('name');
  handleNotesChange = this.inputChangeHandler('notes');

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label="Name"
          onChange={this.handleNameChange}
          placeholder="Enter a name"
          value={this.state.name}
          width={6}
        />
        <Form.TextArea
          label="Notes"
          value={this.state.notes}
          placeholder="Enter notes"
          onChange={this.handleNotesChange}
          width={6}
        />
        <Button type="submit">
          Create Watch List
        </Button>
      </Form>
    )
  }
}

export default graphql(createWatchList)(WatchListForm);
