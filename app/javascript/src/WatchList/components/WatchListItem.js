import React from 'react';
import PropTypes from 'prop-types';
import { Item, List, Grid } from 'semantic-ui-react';
import tmdbImageUrl from '/util/tmdbImageUrl';
import RemoveButton from './RemoveButton';
import UserMovieForm from './UserMovieForm';

const WatchListItem = ({
  id,
  index,
  movieId,
  poster_path,
  title,
  release_date,
  overview,
  vote_average,
  popularity,
  budget,
  revenue,
  runtime,
  userData,
}) => (
  <Item
    style={{
      backgroundColor: index % 2 === 0 ? 'hsl(0, 0%, 98%)' : 'hsl(0, 0%, 95%)',
      padding: '1.5em',
    }}
  >
    <Item.Image src={tmdbImageUrl(poster_path)} />
    <Item.Content>
      <Item.Header>{title}</Item.Header>
      <RemoveButton
        style={{ marginLeft: '1em' }}
        watchListId={id}
        movieId={movieId}
        title={title}
      />
      <Item.Meta>Released {release_date}</Item.Meta>
      <Item.Description>
        <p>{overview}</p>
        <Grid>
          <Grid.Row>
            <Grid.Column width={4}>
              <List>
                <List.Item icon="sort" content={`Average Vote: ${vote_average}`} />
                <List.Item icon="users" content={`Popularity: ${popularity}`} />
                <List.Item icon="dollar" content={`Budget: ${budget || 'N/A'}`} />
                <List.Item icon="money" content={`Revenue: ${revenue || 'N/A'}`} />
                <List.Item icon="time" content={`Runtime: ${runtime}`} />
              </List>
            </Grid.Column>
            <Grid.Column width={6}>
              <UserMovieForm
                movieId={movieId}
                title={title}
                userData={userData}
                watchListId={id}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Item.Description>
    </Item.Content>
  </Item>
);

WatchListItem.propTypes = {
  id: PropTypes.string,
  index: PropTypes.string,
  movieId: PropTypes.string,
  poster_path: PropTypes.string,
  title: PropTypes.string,
  release_date: PropTypes.string,
  overview: PropTypes.string,
  vote_average: PropTypes.string,
  popularity: PropTypes.string,
  budget: PropTypes.string,
  revenue: PropTypes.string,
  runtime: PropTypes.string,
  userData: PropTypes.string,
};

export default WatchListItem;
