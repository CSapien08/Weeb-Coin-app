import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CryptoInfo from '../CryptoInfo.js';

Enzyme.configure({ adapter: new Adapter() });

describe('When the crypto info page loads', () => {
  it('has an h3 tag', () => {
    expect(shallow(<CryptoInfo />).find('h3').length).toEqual(1)
  })
})
