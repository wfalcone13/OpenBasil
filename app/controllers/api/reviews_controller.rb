class Api::ReviewsController < ApplicationController 

  def create
    @review = Review.new(review_params)
    @review.user_id = current_user.id 

    if @review.save!
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end


  def index
    @reviews = @restaurant.reviews 

  end

  private
  def review_params
    params.require(:review).permit(:restaurant_id, :body, :stars, :title)
  end

end
