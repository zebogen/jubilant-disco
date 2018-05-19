/* global module */
import React from 'react';
import { storiesOf } from '@storybook/react';

import { UserMovieForm } from '/WatchList/containers/UserMovieForm';

const dummyUserData = {
  id: 1,
  movie_id: 4,
  user_id: 7,
  priority: 4,
};

storiesOf('UserMovieForm', module)
  .add('default', () => <UserMovieForm userData={dummyUserData} />)
