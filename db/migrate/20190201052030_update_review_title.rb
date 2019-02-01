class UpdateReviewTitle < ActiveRecord::Migration[5.2]
  def change
    change_column :reviews, :title, :string, null: false 
  end
end
