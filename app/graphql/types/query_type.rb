Types::QueryType = GraphQL::ObjectType.define do
  name 'Query'

  field :watch_lists, !types[Types::WatchListType] do
    resolve ->(obj, args, ctx) {
      WatchList.all
    }
  end

  # field :movies, !types[Types::MovieType] do
  #   resolve ->(obj, args, ctx) {
  #     Movie.all
  #   }
  # end
end
