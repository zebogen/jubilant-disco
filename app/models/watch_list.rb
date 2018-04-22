class WatchList < ApplicationRecord
  belongs_to :user, inverse_of: :watch_lists
  has_many :watch_list_movies
  has_many :movies, through: :watch_list_movies
end
