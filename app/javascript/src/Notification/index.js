import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Message, Transition } from 'semantic-ui-react';
import Content from './components/Content';

const query = gql`
{
  notification @client
}
`

const Notification = () => (
  <Query query={query}>
    {({ data, client }) => (
      <Transition visible={!!data.notification.show}>
        <Content
          message={data.notification.text}
          slug={data.notification.slug}
          onDismiss={() => (
            client.writeQuery({
              query,
              data: {
                notification: {
                  ...data.notification,
                  show: false,
                },
              }
            })
          )}
        />
      </Transition>
    )}
  </Query>
);

export default Notification;
