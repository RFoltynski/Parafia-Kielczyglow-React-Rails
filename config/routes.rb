Rails.application.routes.draw do
  resources :posts
  get 'kaplani', to: 'pages#index'
  get 'aktualnosci', to: 'pages#index'
  get 'intencje', to: 'pages#index'
  get 'parafia', to: 'pages#index'
  get 'kontakt', to: 'pages#index'
  get 'inne', to: 'pages#index'
  root "pages#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
