import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Input } from 'semantic-ui-react';
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
          <Form.Field width={6}>
            <label>Search</label>
            <Input type="text" action>
              <input ref={node => this._searchInputRef = node} />
              <Button onClick={this.handleSubmit}>Search</Button>
            </Input>
          </Form.Field>
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
