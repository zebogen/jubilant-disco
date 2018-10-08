# frozen_string_literal: true

class Movie < ApplicationRecord
  has_many :watch_list_movies, dependent: :destroy
  has_many :watch_lists, through: :watch_list_movies
  has_many :user_movies, dependent: :destroy

  validates :tmdb_id, presence: true, uniqueness: true

  after_create :fetch_tmdb_json

  private

  def fetch_tmdb_json
    return unless tmdb_json.nil?
    FetchTmdbJson.perform_async(tmdb_id)
  end
end
