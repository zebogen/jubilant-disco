Types::WatchListType = GraphQL::ObjectType.define do
  name 'WatchList'

  field :id, !types.ID
  field :name, !types.String

  field :movies, Types::MovieType do
    resolve ->(obj, args, ctx) { obj.movies }
  end
end
