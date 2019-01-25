class UpdateRestaurants < ActiveRecord::Migration[5.2]
  def change
    change_column :restaurants, :long, :float, null: false 
    change_column :restaurants, :lad, :float, null: false 
  end
end
