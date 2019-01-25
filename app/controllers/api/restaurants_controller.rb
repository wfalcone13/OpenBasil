class Api::RestaurantsController < ApplicationController 

  def create
    @restaurant = Restaurant.create!(restaurant_params)
    render :show 

  end

  def index
    @restaurants = Restaurant.all 
  end

  def show
    @restaurant = Restaurant.find(params[:id])
  end

  private
  def restaurant_params
    params.require(:restaurant).permit(:name, :category, :long, :lad, :location)
  end
end