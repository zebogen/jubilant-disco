import React from 'react';
import { Query } from 'react-apollo';
import { Loader } from 'semantic-ui-react';

export default function withQuery({ variables = {}, ...options }) {
  return (WrappedComponent) => {
    const component = props => (
      <Query
        {...options}
        variables={
          typeof variables === 'function'
            ? variables(props)
            : variables
        }
      >
        {queryProps => (
          queryProps.loading
            ? <Loader active />
            : <WrappedComponent {...props} {...queryProps} />
        )}
      </Query>
    );

    component.displayName = `queryFor-${WrappedComponent.displayName}`;

    return component;
  }
}
