Types::MovieType = GraphQL::ObjectType.define do
  name 'Movie'

  field :id, !types.ID
  field :tmdb_id, !types.String
  field :title, !types.String do
    resolve ->(obj, args, ctx) {
      obj.tmdb_json['title']
    }
  end
end
