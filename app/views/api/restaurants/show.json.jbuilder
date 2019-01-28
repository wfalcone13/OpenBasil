 json.set! restaurant.id do 
    json.extract! restaurant, :id, :name , :category, :long, :lad, :location
    json.photoURL (restaurant.photo)
  end