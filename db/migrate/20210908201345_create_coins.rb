class CreateCoins < ActiveRecord::Migration[6.1]
  def change
    create_table :coins do |t|
      t.string :name
      t.string :symbol
      t.float :price
      t.float :volume_24h
      t.float :market_cap
      t.datetime :last_updated
      t.bigint :total_supply
      t.string :logo

      t.timestamps
    end
  end
end
