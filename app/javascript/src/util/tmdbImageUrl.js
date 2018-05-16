import { TMDB_IMAGE_BASE_URL } from 'src/shared/constants';

export default function tmdbImageUrl(path, width = 400) {
  return path
    ? `${TMDB_IMAGE_BASE_URL}/w${width}${path}`
    : 'http://via.placeholder.com/400x600'
}
