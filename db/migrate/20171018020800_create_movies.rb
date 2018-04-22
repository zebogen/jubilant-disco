class CreateMovies < ActiveRecord::Migration[5.1]
  def change
    create_table :movies do |t|
      t.integer :tmdb_id, index: true, null: false

      t.timestamps
    end
  end
end
