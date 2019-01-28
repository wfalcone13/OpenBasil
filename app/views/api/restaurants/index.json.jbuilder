@restaurants.each do |restaurant|
  json.set! restaurant.id do 
    json.extract! restaurant, :id, :name , :category, :long, :lad, :location
    json.photoURL url_for(restaurant.photo)
  end
end