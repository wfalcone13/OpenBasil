class Restaurant < ApplicationRecord 
  validates :name, :category, :long, :lad, :location, presence: true

  has_one_attached :photo

end