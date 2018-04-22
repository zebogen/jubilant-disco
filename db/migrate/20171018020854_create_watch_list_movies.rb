class CreateWatchListMovies < ActiveRecord::Migration[5.1]
  def change
    create_table :watch_list_movies do |t|
      t.belongs_to :watch_list, index: true, null: false
      t.belongs_to :movie, index: true, null: false
      t.integer :priority

      t.timestamps
    end
  end
end
