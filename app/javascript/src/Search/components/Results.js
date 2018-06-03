import React from 'react';
import PropTypes from 'prop-types';
import { Query, Mutation } from 'react-apollo';
import withQuery from '/shared/hoc/withQuery';
import gql from 'graphql-tag';
import { Item, Loader, Pagination } from 'semantic-ui-react';
import styled from 'react-emotion';
import searchMovies from 'src/queries/searchMovies';
import MovieResultItem from 'src/Search/components/MovieResultItem';

const ResultsWrapper = styled('div')`
  margin-top: 2em;
`

const PaginationWrapper = styled('div')`
  margin: 2em 0;
`

class Results extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      tmdbMovies: PropTypes.shape({
        page: PropTypes.number,
        total_pages: PropTypes.number,
        total_results: PropTypes.number,
        results: PropTypes.arrayOf(PropTypes.object),
      })
    }),
    query: PropTypes.string,
  };

  state = {
    page: 1,
  };

  handlePageChange = (_event, data) => {
    const {
      client,
      data: { searchParams },
    } = this.props;

    // this.setState({ page: data.activePage })
    client.writeData({
      data: {
        searchParams: {
          ...searchParams,
          page: data.activePage,
        },
      }
    })
  };

  render() {
    const { page } = this.props.data.searchParams;

    return (
      <ResultsWrapper>
        <Query query={searchMovies} variables={{ query: this.props.query, page }}>
          {({ loading, error, data }) => {
            if (error) {
              return <p>Error :(</p>;
            } else {
              return (
                <React.Fragment>
                  {data.tmdbMovies && <h3>Results ({data.tmdbMovies.total_results})</h3>}
                  <Loader active={loading} size="huge" inline />
                  {!loading && data.tmdbMovies && (
                    <React.Fragment>
                      <p>Page {page} of {data.tmdbMovies.total_pages}</p>
                      <Item.Group divided relaxed>
                        {data.tmdbMovies.results.map(movie => <MovieResultItem key={movie.id} movie={movie} />)}
                      </Item.Group>
                    </React.Fragment>
                  )}
                  {data.tmdbMovies && data.tmdbMovies.total_pages > 1 && (
                    <PaginationWrapper>
                      <Pagination
                        activePage={page}
                        totalPages={data.tmdbMovies.total_pages}
                        onPageChange={this.handlePageChange}
                      />
                    </PaginationWrapper>
                  )}
                </React.Fragment>
              );
            }
          }}
        </Query>
      </ResultsWrapper>
    );
  }
}

export default withQuery({
  query: gql`
    {
      searchParams @client {
        page
      }
    }
  `,
  showLoader: false,
})(Results);

// export default Results;
