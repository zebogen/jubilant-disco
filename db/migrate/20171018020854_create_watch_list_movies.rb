class CreateWatchListMovies < ActiveRecord::Migration[5.1]
  def change
    create_table :watch_list_movies do |t|
      t.belongs_to :watch_list, null: false
      t.belongs_to :movie, null: false
      t.integer :priority

      t.timestamps

      t.index [:watch_list_id, :movie_id], unique: true
    end
  end
end
