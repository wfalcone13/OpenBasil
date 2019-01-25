class AddUserLocation < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :primary_location, :string 
  end
end
