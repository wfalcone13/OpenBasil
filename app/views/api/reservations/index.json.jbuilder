
json.reservations do 
  @reservations.each do |reservation|
    json.set! reservation.id do 
      json.extract! reservation, :id, :user_id, :restaurant_id, :reservation_time, :reservation_date, :seating_number
    end
  end
end

json.restaurants do 
  @reserved_restaurants.each do |rest|
    json.set! rest.id do 
      json.extract! rest, :name, :id
      json.photoURL url_for(rest.photo)
    end
  end
end

