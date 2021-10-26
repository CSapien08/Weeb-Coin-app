import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AboutUs from '../AboutUs.js';

Enzyme.configure({ adapter: new Adapter() });

describe('When the about us page loads', () => {
  it('has an h3 tag', () => {
    expect(shallow(<AboutUs />).find('h3').length).toEqual(1)
  })
})
