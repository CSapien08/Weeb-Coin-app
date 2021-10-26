class CoinsController < ApplicationController

    def fetchAPI
        api_key = ENV["API_KEY"]
        api_coins_data = HTTParty.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=' + api_key)['data']
        api_coins_data.each do |coin_data|
          create_or_update_coin(coin_data)
        end
    end

    def index
        coins = Coin.all.order(id: :asc)
        render json: coins
    end

    private
    def create_or_update_coin(coin_data)
      coin = Coin.find_by(symbol: coin_data['symbol'])
      if coin
        coin.update(
          price: coin_data['quote']['USD']['price'],
          volume_24h: coin_data['quote']['USD']['volume_24h'],
          market_cap: coin_data['quote']['USD']['market_cap'],
          total_supply: coin_data['total_supply'],
          last_updated: coin_data['last_updated'],
        )
      else
        Coin.create(
          name: coin_data['name'],
          symbol: coin_data['symbol'],
          price: coin_data['quote']['USD']['price'],
          volume_24h: coin_data['quote']['USD']['volume_24h'],
          market_cap: coin_data['quote']['USD']['market_cap'],
          last_updated: coin_data['last_updated'],
          total_supply: coin_data['total_supply'],
          api_id: coin_data['id']
        )
      end
    end
end
