Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :users
  resources :sessions, only: [:create]
  resources :registrations, only: [:create]
  post '/logresult', to: 'api#logresult'

  namespace :api do
    namespace :v1 do

      # event routing
      get 'events/', to: 'event#test'

      # avatar routing


      # body location routing


      # user routing


      # disease routing


      # marker routing


      # tumor routing


      # freckle routing


      # auth routing
      # post '/login', to: 'auth#login'
      # post '/register', to: 'auth#register'

    end
  end
end
