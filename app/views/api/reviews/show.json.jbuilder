 json.review do 
  json.set! @review.id do 
    json.extract! @review, :id, :user_id, :restaurant_id, :body, :stars, :title, :created_at
  end
end

json.restaurant do
  json.set! @review.restaurant.id do
    json.extract! @review.restaurant, :review_ids, :id
  end
end

json.user do 
  json.set! @review.user.id do 
    json.extract! @review.user, :first_name, :last_name
  end
end