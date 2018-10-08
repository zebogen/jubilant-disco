class AddUniquenessToMovies < ActiveRecord::Migration[5.1]
  def change
    remove_index :movies, :tmdb_id
    add_index :movies, :tmdb_id, unique: true
  end
end
