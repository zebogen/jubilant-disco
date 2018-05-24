import gql from 'graphql-tag';

export default gql`
  query SearchTmdbMovies($query: String!, $page: Int) {
    tmdbMovies(query: $query, page: $page) {
      page
      total_pages
      total_results
      results {
        id
        title
        popularity
        overview
        release_date
        poster_path
      }
    }
  }
`
