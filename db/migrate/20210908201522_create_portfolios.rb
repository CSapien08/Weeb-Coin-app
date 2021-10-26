class CreatePortfolios < ActiveRecord::Migration[6.1]
  def change
    create_table :portfolios do |t|
      t.integer :user_id
      t.integer :coin_id
      t.float :initial_quantity
      t.float :current_quantitiy

      t.timestamps
    end
  end
end
