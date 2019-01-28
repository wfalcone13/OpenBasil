class Api::RestaurantsController < ApplicationController 

  def create
    @restaurant = Restaurant.create!(restaurant_params)
    render :show 

  end

  def index
    @restaurants = Restaurant.all 
    render :index
  end

  def show
    @restaurant = Restaurant.find(params[:id])
    render :show
  end

  private
  def restaurant_params
    params.require(:restaurant).permit(:name, :category, :long, :lad, :location )
  end
end