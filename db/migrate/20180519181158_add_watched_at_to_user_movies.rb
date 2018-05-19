class AddWatchedAtToUserMovies < ActiveRecord::Migration[5.1]
  def change
    add_column :user_movies, :watched_at, :timestamp
    remove_column :user_movies, :watched
  end
end
