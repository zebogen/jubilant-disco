Rails.application.routes.draw do
  resources :watch_lists

  devise_for :users
  root to: 'home#index'
end
