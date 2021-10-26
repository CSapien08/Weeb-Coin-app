import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Coin from '../Coin.js';

Enzyme.configure({ adapter: new Adapter() });

describe('When show coin page loads', () => {
  it('contains coin logo image', () => {
    const coin = {
      name:"Ethereum",
      symbol:"ETH",
      price:3600.5,
      volume_24h: 200000.25,
      market_cap: 400619097429.4,
      last_updated: "2018-09-28T00:00:00.000Z",
      total_supply: 21000000,
      logo: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD"
    }
    let img = shallow(<Coin coin={coin}/>).find('img')
    expect(img.props().src).toEqual("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD")
  })
})
