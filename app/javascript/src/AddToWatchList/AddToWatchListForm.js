import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Popup, Dropdown } from 'semantic-ui-react';
import { Mutation } from 'react-apollo';
import addToWatchList from '/mutations/addToWatchList';
import createNotification from '/shared/helpers/createNotification';
import withMutation from '/shared/hoc/withMutation';

class AddToWatchListForm extends React.Component {
  static propTypes = {
    watchLists: PropTypes.array,
    tmdbId: PropTypes.string.isRequired,
  };

  state = {
    selectedWatchListId: null,
    success: undefined,
    error: undefined,
  };

  handleChange = (_event, data) => {
    this.setState({ selectedWatchListId: ~~data.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.mutate(this.state.selectedWatchListId);
  }

  handleDropdownClick = (_event, data) => this.mutate(~~data.value);

  mutate = (watchListId) => (
    this.props.mutate({
      variables: {
        tmdbId: this.props.tmdbId,
        watchListId,
      },
      update: (cache, { data: { addToWatchList } }) => (
        createNotification({
          cache,
          slug: 'addToWatchListSuccess',
          text: `Movie added to watch list '${addToWatchList.name}'`,
        })
      ),
    })
  );

  watchListOptions() {
    const {
      watchLists,
      tmdbId,
    } = this.props;

    return (watchLists || [])
      .filter(({ movies }) => !movies.some(movie => movie.tmdb_id === tmdbId))
      .map(({ name, id }) => ({
        key: id,
        text: name,
        value: id,
      }));
  }

  render() {
    const options = this.watchListOptions();

    return (
      <Form onSubmit={this.handleSubmit}>
        {/* <Form.Select
          disabled={this.props.loading || options.length === 0}
          label="Add to Watch List"
          loading={this.props.queryLoading}
          options={options}
          onChange={this.handleChange}
          width={this.props.width}
        />
        <Button disabled={loading || options.length === 0} type="submit">Add</Button> */}
        <Dropdown
          disabled={this.props.loading || options.length === 0}
          text="Add to Watch List"
          icon="plus square"
          button
          labeled
          className="icon"
          loading={this.props.queryLoading}
        >
          <Dropdown.Menu>
            <Dropdown.Header icon="list" content="Select a list" />
            {options.map(({ text, value }) => (
              <Dropdown.Item key={value} value={value} onClick={this.handleDropdownClick}>
                {text}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </Form>
    );
  }
}

export default withMutation({ mutation: addToWatchList })(AddToWatchListForm);
