# frozen_string_literal: true

class WatchList < ApplicationRecord
  belongs_to :user, inverse_of: :watch_lists
  has_many :watch_list_movies, dependent: :destroy
  has_many :movies, through: :watch_list_movies
end
