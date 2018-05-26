# frozen_string_literal: true

FactoryBot.define do
  factory :watch_list do
    name "My WatchList"
    user

    factory :watch_list_with_movies do
      transient do
        movie_count 3
      end

      after(:create) do |watch_list, evaluator|
        watch_list.movies << create_list(:movie, evaluator.movie_count)
      end
    end
  end
end
