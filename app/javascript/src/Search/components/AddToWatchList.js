import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { compose, graphql } from 'react-apollo';
import addToWatchList from 'src/mutations/addToWatchList';
import getWatchLists from 'src/queries/getWatchLists';

class AddToWatchList extends React.Component {
  state = {
    selectedWatchListId: null,
  };

  handleChange = (_event, data) => {
    this.setState({ selectedWatchListId: ~~data.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.mutate({
      // refetchQueries: [{ query }],
      variables: {
        tmdbId: this.props.tmdbId,
        watchListId: this.state.selectedWatchListId,
      },
    })
  }

  watchListOptions() {
    const {
      data: { watchLists },
      tmdbId,
    } = this.props;

    return watchLists
      .filter(({ movies }) => !movies.some(movie => movie.tmdb_id === tmdbId))
      .map(({ name, id }) => ({
        key: id,
        text: name,
        value: id,
      }));
  }

  render() {
    const { data } = this.props;

    if (data.loading) return <p>loading...</p>;

    const options = this.watchListOptions();

    return (
      <Form onSubmit={this.handleSubmit}>
        {options.length > 0
          ? <Form.Select label="Watch List" options={options} onChange={this.handleChange} />
          : 'This movie is already in all your watch lists.'}
        <Button type="submit">Add</Button>
      </Form>
    );
  }
}

export default compose(
  graphql(addToWatchList),
  graphql(getWatchLists)
)(AddToWatchList);
