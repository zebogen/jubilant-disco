def tmdb_json_resolver(field)
  ->(obj, args, ctx) {
    obj.tmdb_json&.dig(field)
  }
end

Types::MovieType = GraphQL::ObjectType.define do
  name 'Movie'

  field :id, !types.ID
  field :tmdb_id, !types.String
  field :title, types.String do
    resolve tmdb_json_resolver('title')
  end
  field :backdrop_path, types.String do
    resolve tmdb_json_resolver('backdrop_path')
  end
  field :budget, types.Int do
    resolve tmdb_json_resolver('budget')
  end
  field :genres, types[Types::GenreType] do
    resolve tmdb_json_resolver('genres')
  end
  field :imdb_id, types.String do
    resolve tmdb_json_resolver('imdb_id')
  end
  field :overview, types.String do
    resolve tmdb_json_resolver('overview')
  end
  field :popularity, types.Float do
    resolve tmdb_json_resolver('popularity')
  end
  field :poster_path, types.String do
    resolve tmdb_json_resolver('poster_path')
  end
  field :release_date, types.String do
    resolve tmdb_json_resolver('release_date')
  end
  field :revenue, types.Int do
    resolve tmdb_json_resolver('revenue')
  end
  field :runtime, types.Int do
    resolve tmdb_json_resolver('runtime')
  end
  field :status, types.String do
    resolve tmdb_json_resolver('status')
  end
  field :tagline, types.String do
    resolve tmdb_json_resolver('tagline')
  end
  field :vote_average, types.Float do
    resolve tmdb_json_resolver('vote_average')
  end

  field :user_data, Types::UserMovieType do
    resolve ->(obj, args, ctx) {
      obj.user_movies.find_by!(user_id: ctx[:current_user].id)
    }
  end
end
