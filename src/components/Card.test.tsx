import { shallow } from 'enzyme';
import React from 'react';
import Card from './Card';
import { IRobot } from './interfaces.d';

it('expects to render Card component', () => {
  const mockRobot: IRobot = {
    id: 1,
    name: 'John Smith',
    username: 'Johns',
    email: 'john@example.com'
  }
  expect(shallow(<Card robot={mockRobot}/>)).toMatchSnapshot();
})