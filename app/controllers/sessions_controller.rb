class SessionsController < ApplicationController
  def new
  end
  
  def create
    user = User.find_by(email: params[:session][:email])
    if user && user.authenticate(params[:session][:password])
      session[:user_id] = user.id
      flash[:succes] = 'You have successfully logged in'
      redirect_to root_path()
    else
      flash.now[:danger] = "Something went wrong"
      render 'new'
    end
  end

  def destroy
    
  end
end