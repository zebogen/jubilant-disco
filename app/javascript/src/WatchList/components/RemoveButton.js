import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import createNotification from '/shared/helpers/createNotification';
import withMutation from '/shared/hoc/withMutation';
import getWatchList from '/queries/getWatchList';
import removeFromWatchList from '/mutations/removeFromWatchList';

const RemoveButton = ({
  movieId,
  mutate,
  title,
  watchListId,
  ...restProps
}) => (
  <Button
    {...restProps}
    icon="trash"
    onClick={() =>
      mutate({
        refetchQueries: [{ query: getWatchList, variables: { id: watchListId } }],
        update: cache => (
          createNotification({
            cache,
            slug: 'removeFromWatchListSuccess',
            text: `${title} removed from watch list!`,
          })
        ),
        variables: {
          watchListId,
          movieId,
        },
      })
    }
  />
);

RemoveButton.propTypes = {
  movieId: PropTypes.string.isRequired,
  mutate: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  watchListId: PropTypes.string.isRequired,
};

export default withMutation({ mutation: removeFromWatchList })(RemoveButton);
