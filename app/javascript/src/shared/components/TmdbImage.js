import React from 'react';
import PropTypes from 'prop-types';
import { TMDB_IMAGE_BASE_URL } from 'src/shared/constants';

const TmdbImage = ({ path, width }) => (
  <img src={`${TMDB_IMAGE_BASE_URL}/w${width}${path}`} />
);

TmdbImage.propTypes = {
  path: PropTypes.string.isRequired,
  width: PropTypes.number,
};

TmdbImage.defaultProps = {
  width: 400,
};

export default TmdbImage;
