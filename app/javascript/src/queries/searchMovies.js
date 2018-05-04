import gql from 'graphql-tag';

export default gql`
  query SearchTmdbMovies($query: String!) {
    tmdbMovies(query: $query) {
      page
      total_pages
      total_results
      results {
        id
        title
        popularity
        overview
        release_date
      }
    }
  }
`
