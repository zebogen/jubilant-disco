import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Item } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import TmdbImage from '/shared/components/TmdbImage';
import RemoveButton from './RemoveButton';

const ImagesWrapper = styled.div`
  align-items: center;
  display: inline-flex;
  margin-right: ${props => (props.children.length - 1) * -50}px;
`

const ImageWrapper = styled.div`
  box-shadow: 1px;
  transition: 250ms;
  transform: translateX(${props => props.index * -50}px);

  &:hover {
    transform: scale3d(2, 2, 1) translateX(${props => props.index * -20}px);
    z-index: 9;
  }

  img {
    border: thin solid lightgray;
    border-radius: 4px;
  }
`

const DetailsWrapper = styled.div`
  display: inline-block;
  vertical-align: top;
`

const WatchListHeader = styled.header`
  font-size: ${20 / 14}em;
  margin-bottom: ${8 / 14}em;
`

const WatchList = ({
  id,
  name,
  notes,
  movies,
}) => (
  <Item>
    <Item.Content style={{ position: 'relative' }}>
      <Grid>
        <Grid.Column width={4}>
          <ImagesWrapper>
            {movies.slice(0, 5).map(({ poster_path }, index) => (
              <ImageWrapper key={poster_path} index={index}>
                <TmdbImage path={poster_path} width="100" />
              </ImageWrapper>
            ))}
          </ImagesWrapper>
        </Grid.Column>
        <Grid.Column width={11} as={DetailsWrapper}>
          <WatchListHeader>
            <Link to={`/watchLists/${id}`}>{name}</Link>
          </WatchListHeader>
          <p>{notes}</p>
        </Grid.Column>
        <Grid.Column width={1}>
          <RemoveButton
            watchListId={id}
            name={name}
          />
        </Grid.Column>
      </Grid>
    </Item.Content>
  </Item>
);

WatchList.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  notes: PropTypes.string,
  movies: PropTypes.array.isRequired,
};

export default WatchList;
