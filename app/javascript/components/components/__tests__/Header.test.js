import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from '../Header.js';

Enzyme.configure({ adapter: new Adapter() });

describe('When the header component loads', () => {
  it('has an header tag', () => {
    expect(shallow(<Header />).find('header').length).toEqual(1)
  })
})
