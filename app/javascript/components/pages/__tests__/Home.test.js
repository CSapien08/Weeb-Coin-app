import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from '../Home.js';

Enzyme.configure({ adapter: new Adapter() });

describe('When the about home loads', () => {
  it('has an h1 tag', () => {
    expect(shallow(<Home />).find('h1').length).toEqual(1)
  })
})
