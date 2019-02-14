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

  def search
    @search_q - params[:query].downcase
    @restaurants = Restaurant.all.select do |rest|
      name = rest.name.downcase
      category = rest.category.downcase
      address = rest.location.downcase
      city = rest.location.split(',')[1].downcase
      (name.include?(@search_q) || category.include?(search_q) || address.include?(search_q) ||city.include?(search_q))
    end

    if @restaurants != []
      render :index 
    else 
      render json: ["No Restaurants Found"], status: 422
    end
  end

  private
  def restaurant_params
    params.require(:restaurant).permit(:name, :category, :long, :lad, :location, :rating, :price, :review_count )
  end
end