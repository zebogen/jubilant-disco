import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'semantic-ui-react';
import { Mutation } from 'react-apollo';
import addToWatchList from '/mutations/addToWatchList';
import createNotification from '/shared/helpers/createNotification';

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

  submitHandler = mutate => (event) => {
    event.preventDefault();
    mutate({
      variables: {
        tmdbId: this.props.tmdbId,
        watchListId: this.state.selectedWatchListId,
      },
      update: (cache, { data: { addToWatchList } }) => (
        createNotification({
          cache,
          slug: 'addToWatchListSuccess',
          text: `Movie added to watch list '${addToWatchList.name}'`,
        })
      ),
    })
  }

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
      <Mutation mutation={addToWatchList}>
        {(addToWatchList, { loading, error }) => (
          <Form onSubmit={this.submitHandler(addToWatchList)}>
            {options.length > 0
              ? <React.Fragment>
                  <Form.Select
                    label="Add to Watch List"
                    loading={this.props.loading}
                    options={options}
                    onChange={this.handleChange}
                  />
                  <Button disabled={loading} type="submit">Add</Button>
                </React.Fragment>
              : 'This movie is already in all your watch lists.'}
          </Form>
        )}
      </Mutation>
    );
  }
}

export default AddToWatchListForm;
