import { shallow } from 'enzyme';
import React from 'react';
import Header from './Header';

it('expects to render Header component', () => {
  expect(shallow(<Header />)).toMatchSnapshot();
})