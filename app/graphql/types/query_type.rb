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

  field :movie, Types::MovieType do
    argument :id, !types.Id

    resolve ->(obj, args, ctx) {
      Movie.find_by(tmdb_id: args[:id])
    }
  end

  field :tmdb_movies, Types::TmdbSearchType do
    argument :query, !types.String
    argument :page, types.Int, default_value: 1

    resolve ->(obj, args, ctx) {
      TmdbClient.new.search(query: args[:query], page: args[:page])
    }
  end
end
