# frozen_string_literal: true

FactoryBot.define do
  factory :movie do
    sequence(:tmdb_id)
    tmdb_json {}
  end
end
