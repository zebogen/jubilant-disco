import React from 'react';
import { graphql } from 'react-apollo';

export default function withGraphql(Component, ...graphqlArgs) {
  const WrappedComponent = ({ data, ...restProps }) => {
    if (data.loading) return <p>Loading...</p>;
    if (data.error) return <p>Error :(</p>;
    return <Component {...restProps} data={data} />;
  }

  return graphql(...graphqlArgs)(WrappedComponent);
}
