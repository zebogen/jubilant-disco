import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import searchMovies from 'src/queries/searchMovies';

class Search extends React.Component {
  state = {
    searchInput: '',
    searchString: null,
  };

  handleSearchInput = e => (
    this.setState({ searchInput: e.target.value })
  );

  handleSubmit = () => (
    this.setState(prevState => ({
      searchString: prevState.searchInput,
      searchInput: '',
    }))
  );

  render() {
    const {
      searchInput,
      searchString,
    } = this.state;

    return (
      <div className="search">
        <Form onSubmit={this.handleSubmit}>
          <Form.Input label="Search" type="text" onChange={this.handleSearchInput} />
          <Button>Search</Button>
        </Form>
        <div className="search__results">
          <h3>Results</h3>
          {searchString && (
            <Query query={searchMovies(searchString)}>
              {({ loading, error, data }) => {
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error :(</p>;

                return data.tmdb_movies.results.map(({ id, title, overview, release_date }) => (
                  <div key={id} className="search__results__item">
                    <Link to={`/movies/${id}`}>{title} ({release_date})</Link>
                    <p>{overview}</p>
                  </div>
                ))
              }}
            </Query>
          )}
        </div>
      </div>
    );
  }
}

export default Search;
