class CreateUserMovies < ActiveRecord::Migration[5.1]
  def change
    create_table :user_movies do |t|
      t.belongs_to :user, null: false
      t.belongs_to :movie, null: false
      t.integer :priority
      t.text :notes
      t.boolean :watched, default: false

      t.timestamps

      t.index [:user_id, :movie_id], unique: :true
    end
  end
end
