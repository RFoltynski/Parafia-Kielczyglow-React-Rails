Rails.application.routes.draw do
  resources :posts
  get 'kaplani', to: 'pages#index'
  get 'aktualnosci', to: 'pages#index'
  get 'intencje', to: 'pages#index'
  get 'parafia', to: 'pages#index'
  get 'kontakt', to: 'pages#index'
  get 'inne', to: 'pages#index'
  root "pages#index"
  get 'login', to: 'sessions#new'
  post 'login', to: 'sessions#create'
  delete 'logout', to: 'sessions#destroy'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
