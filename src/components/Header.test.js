import { shallow } from 'enzyme';
import React from 'react';
import Header from './Header';

it('expects to render Header component', () => {
  expect(shallow(<Header />)).toMatchSnapshot();
})

it('expects shouldComponentUpdate to return false', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.instance().shouldComponentUpdate('', '')).toBe(false);
});