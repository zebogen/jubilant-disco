/* global module */
import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import MovieCard from '/shared/components/MovieCard';
import Movie from '/Movie/components/Movie';

const dummyMovie = {
  id: 1,
  title: 'Live and Let Die',
  release_date: '1973-07-05',
  overview: `James Bond must investigate a mysterious murder case of a British agent in New Orleans.\
    Soon he finds himself up against a gangster boss named Mr. Big.`,
  poster_path: '/p34OScaro2KdISrT4EMfeh1aS0E.jpg',
};

storiesOf('MovieCard', module)
  .addDecorator(StoryRouter())
  .add('default', () => <MovieCard movie={dummyMovie} />)

storiesOf('Movie', module)
  .add('default', () => <Movie movie={dummyMovie} />)
