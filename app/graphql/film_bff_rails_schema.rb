# frozen_string_literal: true

FilmBffRailsSchema = GraphQL::Schema.define do
  mutation(Types::MutationType)
  query(Types::QueryType)
end
