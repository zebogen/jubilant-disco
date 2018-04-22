class CreateWatchLists < ActiveRecord::Migration[5.1]
  def change
    create_table :watch_lists do |t|
      t.belongs_to :user, index: true, null: false
      t.string :name, null: false

      t.timestamps
    end
  end
end
