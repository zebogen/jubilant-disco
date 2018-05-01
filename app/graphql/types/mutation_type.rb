Types::MutationType = GraphQL::ObjectType.define do
  name 'Mutation'

  field :create_watch_list, Types::WatchListType do
    argument :name, !types.String

    resolve ->(obj, args, ctx) {
      current_user.watch_lists.create!(name: args[:name])
    }
  end

  # field :create_movie, Types::MovieType do
  #   argument :tmdb_id, !types.Id

  #   resolve ->(obj, args, ctx) {
  #     # Movie.create!()
  #   }
  # end
end
