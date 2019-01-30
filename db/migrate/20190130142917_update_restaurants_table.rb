class UpdateRestaurantsTable < ActiveRecord::Migration[5.2]
  def change
    change_column :restaurants, :category, :string, null: false 
  end
end
