import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import { Transition } from 'semantic-ui-react';

const View = styled.div`
  border: 1px solid black;
  display: inline-block;
  position: fixed;
  top: 10px;
`

class Notification extends React.Component {
  render() {
    return (
      <Query query={gql`
        {
          notification @client
        }
      `}>
        {({ data, client }) => (
          <Transition visible={!!data.notification.show}>
            <View>
              {data.notification.text}
              <button onClick={() => (
                client.writeData({
                  data: {
                    notification: {
                      show: false,
                      text: null,
                      __typename: 'Notification',
                    },
                  }
                })
              )}>
                Dismiss
              </button>
            </View>
          </Transition>
        )}
      </Query>
    )
  }
}

export default Notification;
