Rails.application.routes.draw do
  resources :posts
  resources :intentions, only: [:index, :show, :edit, :update]
  resources :contacts, only: [:create]
  root "pages#index"
  get 'Duchowienstwo', to: 'pages#index'
  get 'Ogloszenia', to: 'pages#index'
  get 'cmentarz', to: 'pages#index'
  get 'parafia', to: 'pages#index'
  get 'kontakt', to: 'pages#index'
  get 'inne', to: 'pages#index'
  get 'adminPanel', to: 'pages#adminPanel'
  
  get 'login', to: 'sessions#new'
  post 'login', to: 'sessions#create'
  delete 'logout', to: 'sessions#destroy'

  resources :posts do
    member do
      delete :delete_image_attachment
    end
  end

  namespace :api, defaults: { format: 'json' } do
    namespace :v1 do
      resources :posts, only: [:index, :show]
      resources :intentions, only: [:index]
      resources :contacts, only: [:index, :create]
    end
  end
end
