@reviews.each do |review|
  json.set! review.id do 
    json.extract! review, :id, :user_id, :restaurant_id, :body, :stars, :title, :created_at
  end
end