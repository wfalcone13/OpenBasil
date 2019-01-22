class UpdateUsersAgain < ActiveRecord::Migration[5.2]
  def change
  end
  change_column_null :users, :email, false
  change_column_null :users, :first_name, false
  change_column_null :users, :last_name, false


end
