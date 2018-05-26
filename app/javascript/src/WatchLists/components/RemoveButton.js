import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import gql from 'graphql-tag';
import createNotification from '/shared/helpers/createNotification';
import withMutation from '/shared/hoc/withMutation';
import getWatchLists from '/queries/getWatchLists';

const RemoveButton = ({
  mutate,
  name,
  watchListId,
  ...restProps
}) => (
  <Button
    {...restProps}
    icon="trash"
    onClick={() =>
      mutate({
        refetchQueries: [{ query: getWatchLists }],
        update: cache => (
          createNotification({
            cache,
            slug: 'success',
            text: `Watch list ${name} deleted!`,
          })
        ),
        variables: { watchListId },
      })
    }
  />
);

RemoveButton.propTypes = {
  mutate: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  watchListId: PropTypes.string.isRequired,
};

export default withMutation({
  mutation: gql`
    mutation DeleteWatchList($watchListId: ID!) {
      deleteWatchList(watchListId: $watchListId)
    }
  `
})(RemoveButton);
