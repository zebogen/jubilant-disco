Types::MutationType = GraphQL::ObjectType.define do
  name 'Mutation'

  field :createWatchList, Types::WatchListType do
    argument :name, !types.String

    resolve ->(obj, args, ctx) {
      ctx[:current_user].watch_lists.create!(name: args[:name])
    }
  end

  field :addToWatchList, Types::WatchListType do
    argument :watchListId, !types.ID
    argument :tmdbId, !types.ID

    resolve ->(obj, args, ctx) {
      watch_list = ctx[:current_user].watch_lists.find(args[:watchListId])
      Operations::AddToWatchList.new.call(
        watch_list: watch_list,
        tmdb_id: args[:tmdbId]
      )
      watch_list
    }
  end

  field :updateUserMovie, Types::UserMovieType do
    argument :id, !types.ID
    argument :priority, types.Int
    argument :notes, types.String

    resolve ->(obj, args, ctx) {
      user_movie = UserMovie.find_by(id: args[:id])
      user_movie.update!(priority: args[:priority])
      user_movie
    }
  end

  # field :create_movie, Types::MovieType do
  #   argument :tmdb_id, !types.Id

  #   resolve ->(obj, args, ctx) {
  #     # Movie.create!()
  #   }
  # end
end
