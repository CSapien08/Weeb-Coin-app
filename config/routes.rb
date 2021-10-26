Rails.application.routes.draw do
  resources :portfolios
  resources :coins
  get '/api-data', to: 'coins#fetchAPI'
  devise_for :users
  get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
  root 'home#index'
end
