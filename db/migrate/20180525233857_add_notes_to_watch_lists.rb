class AddNotesToWatchLists < ActiveRecord::Migration[5.1]
  def change
    add_column :watch_lists, :notes, :text
  end
end
