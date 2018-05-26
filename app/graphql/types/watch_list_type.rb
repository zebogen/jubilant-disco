Types::WatchListType = GraphQL::ObjectType.define do
  name 'WatchList'

  field :id, !types.ID
  field :name, !types.String
  field :notes, types.String
  field :movies, !types[Types::MovieType] do
    resolve ->(obj, args, ctx) {
      obj.movies.joins(:user_movies).order('coalesce(user_movies.priority, 0) ASC')
    }
  end
end
