 
 
json.restaurant do 
  json.set! @restaurant.id do 
      json.extract! @restaurant, :id, :name , :category, :long, :lad, :location, :rating, :price, :review_count, :review_ids, :description
      json.photoURL url_for(@restaurant.photo)
    end
  end

json.reviews do 
  @restaurant.reviews.each do |review|
    json.set! review.id do 
    json.extract! review, :id, :user_id, :restaurant_id, :body, :stars, :title, :created_at
    json.email review.user.email
    json.user_first review.user.first_name
    json.user_last review.user.last_name

    end
  end
end