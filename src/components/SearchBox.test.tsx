import { shallow } from 'enzyme';
import React from 'react';
import SearchBox from './SearchBox';

it('expects to render SearchBox component', () => {
  const mockSearchField = 'test';
  const mockSearchChange = () => {
    return;
  };
  expect(shallow(
    <SearchBox searchfield={mockSearchField} searchChange={mockSearchChange}/>))
      .toMatchSnapshot();
});
