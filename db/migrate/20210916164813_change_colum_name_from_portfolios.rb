class ChangeColumNameFromPortfolios < ActiveRecord::Migration[6.1]
  def change
    rename_column :portfolios, :current_quantitiy, :current_quantity
  end
end
