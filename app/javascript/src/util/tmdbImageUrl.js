import { TMDB_IMAGE_BASE_URL } from '/shared/constants';

export default function tmdbImageUrl(path, width = 400) {
  return path
    ? `${TMDB_IMAGE_BASE_URL}/w${width}${path}`
    : 'https://via.placeholder.com/400x600'
}
