import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NotFound from '../NotFound.js';

Enzyme.configure({ adapter: new Adapter() });

describe('When the 404 page loads', () => {
  it('has an h3 tag', () => {
    expect(shallow(<NotFound />).find('h3').length).toEqual(1)
  })
})
