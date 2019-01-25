class Restaurant < ApplicationRecord 
  validates :name, :category, :long, :lad, :location, presence: true

end