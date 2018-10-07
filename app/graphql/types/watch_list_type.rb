# frozen_string_literal: true

Types::WatchListType = GraphQL::ObjectType.define do
  name "WatchList"

  field :id, !types.ID
  field :name, !types.String
  field :notes, types.String
  field :movies, !types[Types::MovieType] do
    resolve ->(obj, _args, _ctx) {
      obj.movies.joins(:user_movies).order("user_movies.priority")
    }
  end
end
