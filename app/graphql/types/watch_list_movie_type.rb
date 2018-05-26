# frozen_string_literal: true

Types::WatchListMovieType = GraphQL::ObjectType.define do
  name "WatchListMovie"

  field :id, !types.ID
  field :movie, Types::MovieType
end
