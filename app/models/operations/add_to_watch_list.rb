module Operations
  class AddToWatchList
    def call(watch_list:, tmdb_id:)
      ActiveRecord::Base.transaction do
        movie = Movie.find_or_create_by(tmdb_id: tmdb_id)
        watch_list.movies << movie
        watch_list.save!

        UserMovie.find_or_create_by!(user_id: watch_list.user_id, movie_id: movie.id)
      end
    end
  end
end
