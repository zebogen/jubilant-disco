class RemovePriorityFromWatchListMovies < ActiveRecord::Migration[5.1]
  def change
    remove_column :watch_list_movies, :priority, :integer
  end
end
