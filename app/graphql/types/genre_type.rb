Types::GenreType = GraphQL::ObjectType.define do
  name 'Genre'

  field :id, !types.ID do
    resolve ->(obj, args, ctx) {
      obj['id']
    }
  end
  field :name, !types.String do
    resolve ->(obj, args, ctx) {
      obj['name']
    }
  end
end
