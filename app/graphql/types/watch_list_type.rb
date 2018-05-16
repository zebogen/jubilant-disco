Types::WatchListType = GraphQL::ObjectType.define do
  name 'WatchList'

  field :id, !types.ID
  field :name, !types.String

  field :movies, !types[Types::WatchListMovieType] do
    resolve ->(obj, args, ctx) {
      obj.watch_list_movies
    }
  end
end
