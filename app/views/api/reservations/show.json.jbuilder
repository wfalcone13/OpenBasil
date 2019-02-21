json.reservation do
    json.set! @reservation.id do
        json.extract! @reservation, :id, :user_id, :restaurant_id, :reservation_time, :reservation_date, :seating_number
    end
end

json.user do
    json.set! @reservation.user.id do
        json.extract! @reservation.user, :reservation_ids
    end
end

json.restaurant do
    json.set! @reservation.restaurant.id do
        json.extract! @reservation.restaurant, :reservation_ids
    end
end

