class Coin < ApplicationRecord
    has_many :portfolios
    has_many :users, through: :portfolios

    validates :name, :price, :symbol, :volume_24h, :market_cap, :total_supply, :last_updated, :api_id, presence: true


end
