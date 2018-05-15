import React from 'react';
import PropTypes from 'prop-types';
import { TMDB_IMAGE_BASE_URL } from 'src/shared/constants';
import { Image } from 'semantic-ui-react';

const TmdbImage = ({ path, tmdbWidth, ...restProps }) => (
  <Image src={`${TMDB_IMAGE_BASE_URL}/w${tmdbWidth}${path}`} />
);

TmdbImage.propTypes = {
  path: PropTypes.string.isRequired,
  tmdbWidth: PropTypes.number,
};

TmdbImage.defaultProps = {
  tmdbWidth: 400,
};

export default TmdbImage;
