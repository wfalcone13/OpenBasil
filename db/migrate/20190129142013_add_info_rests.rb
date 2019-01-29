class AddInfoRests < ActiveRecord::Migration[5.2]
  def change
    add_column :restaurants, :rating, :integer
    add_column :restaurants, :price, :integer
    add_column :restaurants, :review_count, :integer
  end
end
