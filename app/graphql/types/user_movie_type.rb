Types::UserMovieType = GraphQL::ObjectType.define do
  name 'UserMovie'

  field :id, !types.ID
  field :movie_id, !types.ID
  field :user_id, !types.ID
  field :priority, types.Int
  field :notes, types.String
  field :watched, types.Bool
end
