Types::MutationType = GraphQL::ObjectType.define do
  name 'Mutation'

  field :createWatchList, Types::WatchListType do
    argument :name, !types.String

    resolve ->(obj, args, ctx) {
      ctx[:current_user].watch_lists.create!(name: args.name)
    }
  end

  field :addToWatchList, Types::WatchListType do
    argument :watchListId, !types.ID
    argument :tmdbId, !types.ID

    resolve ->(obj, args, ctx) {
      watch_list = ctx[:current_user].watch_lists.find(args.watchListId)
      Operations::AddToWatchList.new.call(
        watch_list: watch_list,
        tmdb_id: args.tmdbId
      )
      watch_list
    }
  end

  field :removeFromWatchList, Types::WatchListType do
    argument :watchListId, !types.ID
    argument :movieId, !types.ID

    resolve ->(obj, args, ctx) {
      watch_list = ctx[:current_user].watch_lists.find(args.watchListId)
      watch_list.watch_list_movies.find_by!(movie_id: args.movieId).destroy!
      watch_list
    }
  end

  field :updateUserMovie, Types::UserMovieType do
    argument :id, !types.ID
    argument :priority, types.Int
    argument :notes, types.String
    argument :watched_at, types.String

    resolve ->(obj, args, ctx) {
      user_movie = UserMovie.find_by(id: args.id)
      user_movie.update!(args.to_h)
      user_movie
    }
  end
end
