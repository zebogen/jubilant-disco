import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { compose, graphql, Query, Mutation } from 'react-apollo';
import addToWatchList from '/mutations/addToWatchList';
import getWatchLists from '/queries/getWatchLists';

class AddToWatchList extends React.Component {
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
    const { selectedWatchListId } = this.state;
    mutate({
      // refetchQueries: [{ query: getWatchLists }],
      variables: {
        tmdbId: this.props.tmdbId,
        watchListId: this.state.selectedWatchListId,
      },
      update: (proxy, { data: { addToWatchList } }) => {
        const data = proxy.readQuery({ query: getWatchLists });
        proxy.writeQuery({
          watchLists: data.watchLists.map(list => (
            list.id === selectedWatchListId
              ? addToWatchList
              : list
          )),
        });
      },
    })
  }

  watchListOptions() {
    const {
      data,
      tmdbId,
    } = this.props;

    return (data.watchLists || [])
      .filter(({ movies }) => !movies.some(movie => movie.tmdb_id === tmdbId))
      .map(({ name, id }) => ({
        key: id,
        text: name,
        value: id,
      }));
  }

  render() {
    const { data } = this.props;

    const options = this.watchListOptions();

    return (
      <Mutation mutation={addToWatchList}>
        {(addToWatchList) => (
          <Form onSubmit={this.submitHandler(addToWatchList)}>
            {options.length > 0
              ? <React.Fragment>
                  <Form.Select label="Add to Watch List" options={options} onChange={this.handleChange} />
                  <Button disabled={data.loading} type="submit">Add</Button>
                </React.Fragment>
              : 'This movie is already in all your watch lists.'}
          </Form>
        )}
      </Mutation>
    );
  }
}

export default graphql(getWatchLists)(AddToWatchList);
