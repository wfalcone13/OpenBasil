class CreateRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurants do |t|
      t.string :name, null: false
      t.integer :category, null: false 
      t.decimal :long, null: false 
      t.decimal :lad, null: false 
      t.string  :location, null: false 
      
      t.timestamps
    end

    add_index :restaurants, :name, unique: true 
  end
end
