require 'rails_helper'

RSpec.describe Portfolio, type: :model do



  it "should validate user_id" do
    portfolio=  Portfolio.create( 
  coin_id: 1,
  initial_quantity: 0,
  current_quantity: 10)
  expect(portfolio.errors[:user_id]).to_not be_empty
end

  it "should validate coin_id" do
    portfolio=  Portfolio.create( 
  user_id: 1,
  initial_quantity: 0,
  current_quantity: 10)
  expect(portfolio.errors[:coin_id]).to_not be_empty
end

  it "should validate initial_quantity" do
    portfolio=  Portfolio.create( 
  user_id: 1,
  coin_id: 1,
    current_quantity: 10)
  expect(portfolio.errors[:initial_quantity]).to_not be_empty
end


  it "should validate current_quantity" do
    portfolio=  Portfolio.create( 
  user_id: 1,
  coin_id: 1,
  initial_quantity: 0)
  expect(portfolio.errors[:current_quantity]).to_not be_empty
end

end
