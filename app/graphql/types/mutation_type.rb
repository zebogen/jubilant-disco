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
      watch_list.movies << Movie.find_or_create_by(tmdb_id: args[:tmdbId])
      watch_list.save!
      watch_list
    }
  end

  field :updateWatchListMovie, Types::WatchListMovieType do
    argument :watchListMovieId, !types.ID
    argument :priority, !types.Int

    resolve ->(obj, args, ctx) {
      watch_list_movie =
        Query::User::WatchListMovies.new
          .call(ctx[:current_user].id)
          .find(args[:watchListMovieId])

      watch_list_movie.update!(priority: args[:priority])
      watch_list_movie
    }
  end

  # field :create_movie, Types::MovieType do
  #   argument :tmdb_id, !types.Id

  #   resolve ->(obj, args, ctx) {
  #     # Movie.create!()
  #   }
  # end
end
