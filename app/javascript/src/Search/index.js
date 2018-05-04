import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'semantic-ui-react';
import Results from 'src/Search/components/Results';

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
          <Form.Input label="Search" type="text" onChange={this.handleSearchInput} value={searchInput} />
          <Button>Search</Button>
        </Form>
        <div className="search__results">
          <h3>Results</h3>
          {searchString && <Results query={searchString} />}
        </div>
      </div>
    );
  }
}

export default Search;
