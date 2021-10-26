class AddColumnToCoin < ActiveRecord::Migration[6.1]
  def change
    add_column :coins, :api_id, :integer
  end
end
