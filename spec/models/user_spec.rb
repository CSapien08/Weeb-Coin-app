require 'rails_helper'

RSpec.describe User, type: :model do


  it "should validate that the user inputs a username" do
    user =  User.create( 
      email: 'test@test.com',
      encrypted_password: 'testing123',
    reset_password_token: 'testing123')
  expect(user.errors[:username]).to_not be_empty
end


end
