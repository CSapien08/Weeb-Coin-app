import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Footer from '../Footer.js';

Enzyme.configure({ adapter: new Adapter() });

describe('When the footer component loads', () => {
  it('has an footer tag', () => {
    expect(shallow(<Footer />).find('footer').length).toEqual(1)
  })
})
