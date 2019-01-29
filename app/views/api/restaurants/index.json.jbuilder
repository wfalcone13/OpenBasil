@restaurants.each do |restaurant|
  json.set! restaurant.id do 
    json.extract! restaurant, :id, :name , :category, :long, :lad, :location, :price, :rating, :review_count
    json.photoURL url_for(restaurant.photo)
  end
end