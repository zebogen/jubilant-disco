import React from 'react';
import PropTypes from 'prop-types';
import { Container, Header, Menu } from 'semantic-ui-react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const getMovies = gql`
  {
    movies {
      id
      title
    }
  }
`

const getWatchLists = gql`
  {
    watch_lists {
      id
      name
      movies {
        id
        title
      }
    }
  }
`

class Home extends React.Component {
  state = {
    foo: "bar",
  };

  render() {
    return (
      <Query query={getWatchLists}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;

          return data.watch_lists.map(({ id, name, movies }) => (
            <div key={id}>
              <p>Name: {name}</p>
              <p>Movies: </p>
              <ul>
                {movies.map(({ id, title }) => <li key={id}>{title}</li>)}
              </ul>
            </div>
          ))
        }}
      </Query>
    );
  }
}

export default Home;
