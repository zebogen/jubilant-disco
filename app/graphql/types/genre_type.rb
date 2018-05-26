# frozen_string_literal: true

Types::GenreType = GraphQL::ObjectType.define do
  name "Genre"

  field :id, !types.ID do
    resolve ->(obj, _args, _ctx) {
      obj["id"]
    }
  end
  field :name, !types.String do
    resolve ->(obj, _args, _ctx) {
      obj["name"]
    }
  end
end
