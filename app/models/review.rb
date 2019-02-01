class Review < ApplicationRecord 
  validates :user_id, :restaurant_id, :body, :stars,  :title, presence: true 

  belongs_to :user 
  belongs_to :restaurant

end