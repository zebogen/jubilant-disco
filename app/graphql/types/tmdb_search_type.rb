Types::TmdbSearchType = GraphQL::ObjectType.define do
  name 'TmdbSearch'

  field :page, !types.Int
  field :total_pages, !types.Int
  field :total_results, !types.Int
  field :results, !types[Types::TmdbMovieType]
end
