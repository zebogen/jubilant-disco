# frozen_string_literal: true

Types::QueryType = GraphQL::ObjectType.define do
  name "Query"

  field :watchLists, !types[Types::WatchListType] do
    resolve ->(_obj, _args, ctx) {
      ctx[:current_user].watch_lists
    }
  end

  field :watchList, Types::WatchListType do
    argument :id, !types.ID

    resolve ->(_obj, args, ctx) {
      ctx[:current_user].watch_lists.find(args[:id])
    }
  end

  field :movies, !types[Types::MovieType] do
    resolve ->(_obj, _args, _ctx) {
      Movie.all
    }
  end

  field :movie, Types::MovieType do
    argument :id, !types.ID

    resolve ->(_obj, args, _ctx) {
      Movie.find_by(tmdb_id: args[:id])
    }
  end

  field :tmdbMovies, Types::TmdbSearchType do
    argument :query, !types.String
    argument :page, types.Int, default_value: 1

    resolve ->(_obj, args, _ctx) {
      StructCreator.call(TmdbClient.new.search(query: args[:query], page: args[:page]))
    }
  end
end
