# frozen_string_literal: true

class TmdbClient
  class SearchError < StandardError; end
  class RetriesExceededError < StandardError; end

  API_BASE_URL = "https://api.themoviedb.org/3"
  MOVIE_ENDPOINT = "/movie"
  MOVIE_SEARCH_ENDPOINT = "/search/movie"
  MAX_RETRY_COUNT = 5

  def initialize
    @retry_count = 0
  end

  def find_by_id(tmdb_id)
    get(api_url("#{MOVIE_ENDPOINT}/#{tmdb_id}"))
  end

  def search(query)
    get(api_url(MOVIE_SEARCH_ENDPOINT, query)) do |response|
      response[:results].each do |movie|
        Movie.find_or_create_by!(tmdb_id: movie[:id])
      end
    end
  end

  private

  def parse_response(response)
    JSON.parse(response.body, symbolize_names: true)
  end

  def get(url)
    if @retry_count == MAX_RETRY_COUNT
      raise RetriesExceededError, "Maximum number of retries (#{MAX_RETRY_COUNT}) exceeded."
    end

    @last_url = url
    response = HTTParty.get(url)

    return handle_error(response) unless response.ok?

    parsed_response = parse_response(response)

    yield parsed_response if block_given?

    parsed_response
  end

  def retry_last
    @retry_count += 1
    get(@last_url)
  end

  def handle_error(response)
    if response.code == 429
      retry_after = response.headers["retry_after"]
      sleep retry_after.to_i
      retry_last
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
