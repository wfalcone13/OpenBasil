@restaurants.each do |restaurant|
  json.set! restaurant.id do 
    json.extract! restaurant, :id, :name , :category, :long, :lad, :location, :price, :rating, :review_count, :review_ids
    json.photoURL url_for(restaurant.photo)
  end
end