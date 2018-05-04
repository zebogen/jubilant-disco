class TmdbClient
  class SearchError < StandardError; end

  API_BASE_URL = 'https://api.themoviedb.org/3'.freeze
  MOVIE_ENDPOINT = '/movie'.freeze
  MOVIE_SEARCH_ENDPOINT = '/search/movie'.freeze
  MAX_RETRY_COUNT = 5

  def find_by_id(tmdb_id)
    response = get(api_url("#{MOVIE_ENDPOINT}/#{tmdb_id}"))

    if response.ok?
      parse_response(response)
    else
      handle_error(response)
    end
  end

  def search(query)
    response = get(api_url(MOVIE_SEARCH_ENDPOINT, query))
    parsed_response = parse_response(response)

    if response.ok?
      parsed_response[:results].each do |movie|
        Movie.find_or_create_by!(tmdb_id: movie[:id])
      end

      parsed_response
    else
      handle_error(response)
    end
  end

  private

  def parse_response(response)
    JSON.parse(response.body, symbolize_names: true)
  end

  def get(url)
    if @retry_count == MAX_RETRY_COUNT
      raise SearchError, "Maximum number of retries (#{MAX_RETRY_COUNT}) exceeded."
    end

    @last_url = url
    HTTParty.get(url)
  end

  def retry_last
    @retry_count += 1
    get(@last_url)
  end

  def handle_error(response)
    if response.code == 429
      retry_after = response.headers['retry_after']
      sleep retry_after.to_i
      retry_last
    elsif response.code == 404
      {}
    else
      raise SearchError, "Status code #{response.body[:status_code]}: #{response.parsed_response[:status_message]}"
    end
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
