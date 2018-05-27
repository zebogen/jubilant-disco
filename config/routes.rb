# frozen_string_literal: true

Rails.application.routes.draw do
  mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql" if Rails.env.development?

  post "/graphql", to: "graphql#execute"

  # get "/users/sign_in", to: "home#index"
  # get "/users/sign_up", to: "home#index"

  devise_for :users, controllers: { sessions: "sessions", registrations: "registrations" }
  root to: "home#index"

  get "/*path", to: "home#index"
end
