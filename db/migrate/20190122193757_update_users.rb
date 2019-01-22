class UpdateUsers < ActiveRecord::Migration[5.2]
  def change
  end

  remove_column :users, :username
  add_column :users, :email, :string 
  add_column :users, :first_name, :string 
  add_column :users, :last_name, :string 

  add_index :users, :email, unique: true

end
