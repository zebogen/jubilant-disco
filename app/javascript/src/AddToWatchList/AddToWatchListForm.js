import React from 'react';
import PropTypes from 'prop-types';
import addToWatchList from '/mutations/addToWatchList';
import createNotification from '/shared/helpers/createNotification';
import withMutation from '/shared/hoc/withMutation';
import AddToWatchListDropdown from './AddToWatchListDropdown';

class AddToWatchListForm extends React.PureComponent {
  static propTypes = {
    watchLists: PropTypes.array,
    tmdbId: PropTypes.string.isRequired,
    queryLoading: PropTypes.bool,
    loading: PropTypes.bool,
    mutate: PropTypes.func.isRequired,
  };

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
      options.length === 0 && !this.props.queryLoading
        ? 'This movie is already in all of your watch lists.'
        : <AddToWatchListDropdown
            loading={this.props.queryLoading}
            saving={this.props.loading}
            options={options}
            handleOptionClick={this.handleDropdownClick}
          />
    );
  }
}

export default withMutation({ mutation: addToWatchList })(AddToWatchListForm);
