class WatchListMovie < ApplicationRecord
  belongs_to :movie
  belongs_to :watch_list
end
