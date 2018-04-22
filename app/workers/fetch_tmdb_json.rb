class FetchTmdbJson
  include Sidekiq::Worker

  def perform(tmdb_id)
    tmdb_json = TmdbClient.new.find_by_id(tmdb_id)
    movie = Movie.find_by(tmdb_id: tmdb_id)
    if movie
      movie.update!(tmdb_json: tmdb_json)
    else
      Movie.create!(tmdb_id: tmdb_id, tmdb_json: tmdb_json)
    end
  end
end
