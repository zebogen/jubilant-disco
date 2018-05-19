import gql from 'graphql-tag';
import UserMovieFields from '/fragments/UserMovieFields';

export default gql`
  fragment MovieFields on Movie {
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
    userData {
      ...UserMovieFields
    }
    vote_average
  }
  ${UserMovieFields}
`
