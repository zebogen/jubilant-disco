import gql from 'graphql-tag';

export default gql`
  {
    notification @client {
      show
      text
      slug
    }
  }
`
