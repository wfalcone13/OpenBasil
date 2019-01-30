class Api::ReservationsController < ApplicationController

  def create
    @reservation = Reservation.new(reservation_params)
    @reservation.user_id = current_user.id 
    @reservation.restaurant_id = params[:restaurant_id]
    
    if @reservation.save 
      render "/api/restaurants/:restaurantId" 
    else
      render json: @reservation.errors.full_messages, status: 422
    end
  end

  def show
    @reservation = Reservation.find(params[:id])
    render :show 
  end

  def edit
    @reservation = Reservation.find(params[:id])
  end

  def update
    @reservation = current_user.reservations.find(params[:id])

    if @reservation.update_attributes(reservation_params)
      render :show 
    else
      render json: @reservation.errors.full_messages, status: 422
    end
  end

  def index
    @reservations = Reservation.all
  end
 

  private
  def reservation_params
    params.require(:reservation).permit(:reservation_time, :reservation_date, :seating_number)
  end
end