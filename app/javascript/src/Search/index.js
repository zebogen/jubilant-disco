import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Input } from 'semantic-ui-react';
import styled from 'react-emotion';
import Results from 'src/Search/components/Results';

const SearchBar = styled('div')`
  margin-top: 2em;
`

class Search extends React.Component {
  state = {
    searchString: null,
  };

  handleSubmit = () => (
    this.setState({ searchString: this._searchInputRef.value })
  );

  render() {
    const {
      searchString,
    } = this.state;

    return (
      <div>
        <SearchBar>
          <Form onSubmit={this.handleSubmit}>
            <Form.Field width={6}>
              <Input type="text" action>
                <input ref={node => this._searchInputRef = node} />
                <Button onClick={this.handleSubmit}>Search</Button>
              </Input>
            </Form.Field>
          </Form>
        </SearchBar>
        {searchString && <Results query={searchString} />}
      </div>
    );
  }
}

export default Search;
