import { shallow } from 'enzyme';
import React from 'react';
import CardList from './CardList';

it('expects to render Card component', () => {
  const mockRobots = [
    {
      id: 1,
      name: 'John Smith',
      username: 'Johns',
      email: 'john@example.com'
    },
    {
      id: 2,
      name: 'John Snow',
      username: 'Knowsalot',
      email: 'john@knowsnothing.com'
    }
  ]
  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
})