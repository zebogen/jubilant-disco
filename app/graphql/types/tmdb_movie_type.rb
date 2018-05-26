# frozen_string_literal: true

Types::TmdbMovieType = GraphQL::ObjectType.define do
  name "TmdbMovie"

  field :id, !types.ID
  field :title, !types.String
  field :poster_path, types.String
  field :overview, !types.String
  field :release_date, !types.String
  field :popularity, !types.Float
  field :vote_average, !types.Float
end
