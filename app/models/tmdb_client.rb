class TmdbClient
  API_BASE_URL = 'https://api.themoviedb.org/3'.freeze
  MOVIE_ENDPOINT = '/movie'.freeze
  MOVIE_SEARCH_ENDPOINT = '/search/movie'.freeze

  def find_by_id(tmdb_id)
    parse_response(
      HTTParty.get(api_url("#{MOVIE_ENDPOINT}/#{tmdb_id}"))
    )
  end

  def search(query)
    parse_response(
      HTTParty.get(api_url(MOVIE_SEARCH_ENDPOINT, query: query))
    )
  end

  private

  def parse_response(response)
    AccessorHash.new(JSON.parse(response.body, symbolize_names: true))
  end

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
