class Reservation < ApplicationRecord 
  validates :user_id, :restaurant_id, :reservation_time, :reservation_date, :seating_number

  belongs_to :user 
  belongs_to :restaurant 

end