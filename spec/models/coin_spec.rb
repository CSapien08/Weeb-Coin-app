require 'rails_helper'

RSpec.describe Coin, type: :model do


  it "should validate price" do
    coin =  Coin.create( name: 'bitcoin',
    symbol: 'BTC',
    volume_24h: 100000,
    market_cap: 23000000,
    total_supply: 400000,
    last_updated: '2021-09-15 00:00:00',
    api_id: 1)
    expect(coin.errors[:price]).to_not be_empty
  end

  it "should validate symbol" do
    coin =  Coin.create(name: 'bitcoin',
    price: 46000,
    volume_24h: 100000,
    market_cap: 23000000,
    total_supply: 400000,
    last_updated: '2021-09-15 00:00:00',
    api_id: 1)
    expect(coin.errors[:symbol]).to_not be_empty
  end


  it "should validate name" do
    coin =  Coin.create(
  symbol: 'BTC',
  price: 46000,
  volume_24h: 100000,
  market_cap: 23000000,
  total_supply: 400000,
  last_updated: '2021-09-15 00:00:00',
  api_id: 1)
  expect(coin.errors[:name]).to_not be_empty
  end

  it "should validate volume_24h" do
    coin =  Coin.create( 
  name: 'bitcoin',
  symbol: 'BTC',
  price: 46000,
  market_cap: 23000000,
  total_supply: 400000,
  last_updated: '2021-09-15 00:00:00',
  api_id: 1)
  expect(coin.errors[:volume_24h]).to_not be_empty
  end

  it "should validate market_cap" do
    coin =  Coin.create( 
  name: 'bitcoin',
  symbol: 'BTC',
  price: 46000,
  volume_24h: 100000,
  total_supply: 400000,
  last_updated: '2021-09-15 00:00:00',
  api_id: 1)
  expect(coin.errors[:market_cap]).to_not be_empty
  end
  
  it "should validate total_supply" do
    coin =  Coin.create( 
  name: 'bitcoin',
  symbol: 'BTC',
  price: 46000,
  volume_24h: 100000,
  market_cap: 23000000,
  last_updated: '2021-09-15 00:00:00',
  api_id: 1)
  expect(coin.errors[:total_supply]).to_not be_empty
  end

  it "should validate last_updated" do
    coin =  Coin.create( 
  name: 'bitcoin',
  symbol: 'BTC',
  price: 46000,
  volume_24h: 100000,
  market_cap: 23000000,
  total_supply: 400000,
  api_id: 1)
  expect(coin.errors[:last_updated]).to_not be_empty
  end

  it "should validate api_id" do
    coin =  Coin.create( 
  name: 'bitcoin',
  symbol: 'BTC',
  price: 46000,
  volume_24h: 100000,
  market_cap: 23000000,
  total_supply: 400000,
  last_updated: '2021-09-15 00:00:00',
  )
  expect(coin.errors[:api_id]).to_not be_empty
  end

end
