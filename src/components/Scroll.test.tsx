import { shallow } from 'enzyme';
import React from 'react';
import Scroll from './Scroll';

it('expects to render Scroll component', () => {
  expect(shallow(<Scroll />)).toMatchSnapshot();
});
