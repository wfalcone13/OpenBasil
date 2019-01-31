class Api::ReservationsController < ApplicationController

  def create
    @reservation = Reservation.new(reservation_params)
    @reservation.user_id = current_user.id 
    
    if @reservation.save 
      render :show
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
    render :show
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
    @reservations = current_user.reservations
    @reserved_restaurants = current_user.reserved_restaurants
  end

  def destroy
    @reservation = Reservation.find(params[:id])
    @reservation.destroy
    render :show
  end
 

  private
  def reservation_params
    params.require(:reservation).permit(:restaurant_id, :reservation_time, :reservation_date, :seating_number)
  end
end