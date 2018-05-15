import React from 'react';
import PropTypes from 'prop-types';
import { TMDB_IMAGE_BASE_URL } from 'src/shared/constants';
import { Image } from 'semantic-ui-react';

const TmdbImage = ({ path, tmdbWidth, ...restProps }) => (
  <Image
    src={path ? `${TMDB_IMAGE_BASE_URL}/w${tmdbWidth}${path}` : 'http://via.placeholder.com/400x600'}
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
