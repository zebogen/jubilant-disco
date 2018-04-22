class AddTmdbJsonToMovies < ActiveRecord::Migration[5.1]
  def change
    add_column :movies, :tmdb_json, :jsonb
  end
end
