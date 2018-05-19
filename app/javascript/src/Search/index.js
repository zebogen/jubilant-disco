import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'semantic-ui-react';
import Results from 'src/Search/components/Results';

class Search extends React.Component {
  state = {
    searchString: null,
  };

  // _searchInputRef = React.createRef();

  handleSubmit = () => (
    this.setState(
      { searchString: this._searchInputRef.value },
      // this._searchInputRef.clear
    )
  );

  render() {
    const {
      searchString,
    } = this.state;

    return (
      <div className="search">
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Search</label>
            <input type="text" ref={node => this._searchInputRef = node} />
          </Form.Field>
          <Button type="submit">Search</Button>
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
