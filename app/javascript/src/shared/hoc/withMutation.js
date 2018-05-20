import React from 'react';
import { Mutation } from 'react-apollo';

export default function withMutation(options = {}) {
  return (WrappedComponent) => {
    const component = props => (
      <Mutation {...options}>
        {(mutate, mutationProps) => <WrappedComponent mutate={mutate} {...props} {...mutationProps} />}
      </Mutation>
    );

    component.displayName = `mutationFor-${WrappedComponent.displayName}`;

    return component;
  }
}
