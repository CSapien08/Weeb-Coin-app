class Portfolio < ApplicationRecord
    belongs_to :user
    belongs_to :coin
    validates :coin_id, uniqueness: {scope: :user_id}

    validates :current_quantity, :initial_quantity, :coin_id, :user_id, presence: true
end
