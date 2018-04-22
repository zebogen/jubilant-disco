class TmdbClient
  include HTTParty

  API_BASE_URL = 'https://api.themoviedb.org/3'.freeze
  MOVIE_ENDPOINT = '/movie'.freeze

  def find_by_id(tmdb_id)
    response = HTTParty.get(api_url("#{MOVIE_ENDPOINT}/#{tmdb_id}"))
    JSON.parse(response.body, symbolize_names: true)
  end

  private

  def api_url(endpoint, params = {})
    "#{API_BASE_URL}#{endpoint}?#{query_string(params)}"
  end

  def query_string(params)
    params.merge(api_key: api_key).to_query
  end

  def api_key
    Rails.application.secrets.tmdb_api_key
  end
end
