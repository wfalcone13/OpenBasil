 
 
json.restaurant do 
  json.set! @restaurant.id do 
      json.extract! @restaurant, :id, :name , :category, :long, :lad, :location, :rating, :price, :review_count, :review_ids
      json.photoURL url_for(@restaurant.photo)
    end
  end

json.reviews do 
  @restaurant.reviews.each do |review|
    json.set! review.id do 
    json.extract! review, :id, :user_id, :restaurant_id, :body, :stars, :title
    json.email review.user.email
    json.user_first review.user.first_name[0]
    json.user_last review.user.first_name[0]

    end
  end
end