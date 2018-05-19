import React from 'react';
import { Query } from 'react-apollo';

export default function withQuery(options = {}) {
  return (WrappedComponent) => {
    const component = props => (
      <Query {...options}>
        {queryProps => <WrappedComponent {...props} {...queryProps} />}
      </Query>
    );

    component.displayName = `queryFor-${WrappedComponent.displayName}`;

    return component;
  }
}
