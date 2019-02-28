@restaurants.each do |restaurant|
  json.set! restaurant.id do 
    json.extract! restaurant, :id, :name , :category, :long, :lad, :location, :price, :rating, :review_count, :review_ids, :description
    json.photoURL url_for(restaurant.photo)
    json.reviewRating do 
      json.array!(restaurant.reviews) do |review|
        json.extract! review, :stars
      end
    end
  end
end