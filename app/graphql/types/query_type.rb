Types::QueryType = GraphQL::ObjectType.define do
  name 'Query'

  field :watch_lists, !types[Types::WatchListType] do
    resolve ->(obj, args, ctx) {
      ctx[:current_user].watch_lists
    }
  end

  field :movies, !types[Types::MovieType] do
    resolve ->(obj, args, ctx) {
      Movie.all
    }
  end

  field :tmdb_movies, Types::TmdbSearchType do
    argument :query, !types.String

    resolve ->(obj, args, ctx) {
      TmdbClient.new.search(args[:query])
    }
  end
end
