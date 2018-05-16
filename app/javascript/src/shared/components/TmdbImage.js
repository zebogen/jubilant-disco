import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'semantic-ui-react';
import tmdbImageUrl from '/util/tmdbImageUrl';

const TmdbImage = ({ path, tmdbWidth, ...restProps }) => (
  <Image
    src={tmdbImageUrl(path, tmdbWidth)}
    {...restProps}
  />
);

TmdbImage.propTypes = {
  path: PropTypes.string,
  tmdbWidth: PropTypes.number,
};

TmdbImage.defaultProps = {
  tmdbWidth: 400,
};

export default TmdbImage;
