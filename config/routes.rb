Rails.application.routes.draw do
  resources :posts
  get 'posts/index'
  get 'kaplani', to: 'posts#index'
  get 'aktualnosci', to: 'posts#index'
  get 'intencje', to: 'posts#index'
  get 'parafia', to: 'posts#index'
  get 'kontakt', to: 'posts#index'
  get 'inne', to: 'posts#index'
  root "posts#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
