class Restaurant < ApplicationRecord 
  validates :name, :category, :long, :lad, :location, presence: true

  has_one_attached :photo
  has_many :reservations 
  has_many :reviews 
  

end