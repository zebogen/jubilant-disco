import gql from 'graphql-tag';

export default gql`
  fragment WatchListMovie on Movie {
    id
    tmdb_id
    title
    backdrop_path
    budget
    genres {
      id
      name
    }
    imdb_id
    overview
    popularity
    poster_path
    release_date
    revenue
    runtime
    status
    tagline
    vote_average
  }
`
