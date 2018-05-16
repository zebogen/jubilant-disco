import React from 'react';
import PropTypes from 'prop-types';
import { Header, Item, List } from 'semantic-ui-react';
import tmdbImageUrl from '/util/tmdbImageUrl';

const WatchList = ({
  name,
  movies,
}) => (
  <div>
    <Header>{name}</Header>
    <Item.Group>
      {movies.map(({
        id,
        title,
        poster_path,
        release_date,
        overview,
        popularity,
        revenue,
        vote_average,
        budget,
        runtime,
      }) => (
        <Item key={id}>
          <Item.Image src={tmdbImageUrl(poster_path)} />
          <Item.Content>
            <Item.Header>{title}</Item.Header>
            <Item.Meta>Released {release_date}</Item.Meta>
            <Item.Description>
              <p>{overview}</p>
              <List>
                <List.Item icon="sort" content={`Average Vote: ${vote_average}`} />
                <List.Item icon="users" content={`Popularity: ${popularity}`} />
                <List.Item icon="dollar" content={`Budget: ${budget || 'N/A'}`} />
                <List.Item icon="money" content={`Revenue: ${revenue || 'N/A'}`} />
                <List.Item icon="time" content={`Runtime: ${runtime}`} />
              </List>
            </Item.Description>
          </Item.Content>
        </Item>
      ))}
    </Item.Group>
  </div>
);

export default WatchList;
