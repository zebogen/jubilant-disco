import React from 'react';
import PropTypes from 'prop-types';
import { Header, Item, List, Grid, Transition } from 'semantic-ui-react';
import tmdbImageUrl from '/util/tmdbImageUrl';
import UserMovieForm from '../containers/UserMovieForm';

const WatchList = ({
  id,
  name,
  movies,
}) => (
  <div>
    <Header size="large">{name}</Header>
      <Transition.Group className="ui divided relaxed items watch-list">
        {movies.map(({
          id: movieId,
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
        }, index) => (
          <Item
            key={movieId}
            style={{
              backgroundColor: index % 2 === 0 ? 'hsl(0, 0%, 98%)' : 'hsl(0, 0%, 95%)',
              padding: '1.5em',
            }}
          >
            <Item.Image src={tmdbImageUrl(poster_path)} />
            <Item.Content>
              <Item.Header>{title}</Item.Header>
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
        ))}
      </Transition.Group>
  </div>
);

WatchList.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  movies: PropTypes.array.isRequired,
};

export default WatchList;
