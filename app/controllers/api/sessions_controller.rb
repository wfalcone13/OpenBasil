class Api::SessionsController < ApplicationController

  
  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if user 
      login(@user)
      render "api/users/show"  #where do I render??
    else
      render json: ["Invalid email/password combo"], status: 401
    end
  end

  def destroy
    logout
    redirect_to new_session_url
  end
end