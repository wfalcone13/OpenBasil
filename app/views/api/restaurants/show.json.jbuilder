 json.set! @restaurant.id do 
    json.extract! @restaurant, :id, :name , :category, :long, :lad, :location, :rating, :price, :review_count
    json.photoURL url_for(@restaurant.photo)
  end