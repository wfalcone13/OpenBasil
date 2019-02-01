class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :user_id, null: false 
      t.integer :restaurant_id, null: false
      t.string :body, null: false 
      t.integer :stars, null: false 
      
      
      t.timestamps

    end
  end
end
