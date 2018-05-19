import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Success from './Success';

const COMPONENT_SLUG_MAPPING = {
  addToWatchListSuccess: {
    Component: Success,
    props: {
      header: 'Added!',
    },
  },
  updateMovieSuccess: {
    Component: Success,
    props: {
      header: 'Movie updated!',
    },
  },
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
`

const View = styled.div`
  min-width: 300px;
`

const Content = ({
  slug,
  ...restProps
}) => {
  const { Component, props } = COMPONENT_SLUG_MAPPING[slug];
  return (
    <Wrapper>
      <View>
        <Component {...props} {...restProps} />
      </View>
    </Wrapper>
  );
};

Content.propTypes = {
  slug: PropTypes.oneOf(['addToWatchListSuccess']),
};

export default Content;
