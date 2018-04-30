import gql from 'graphql-tag';

const searchMovies = query => gql`
  {
    tmdb_movies(query: "${query}") {
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

export default searchMovies;
