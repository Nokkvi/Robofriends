import { shallow } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

describe('ErrorBoundry component', () => {
  let wrapper;
  beforeEach(() => {
    const mockProps = {
      onRequestRobots: jest.fn(),
      robots: [],
      searchField: '',
      isPending: false
    }
    wrapper = shallow(<MainPage { ...mockProps }/>)
  })

  it('renders MainPage without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('filters robots correctly', () => {
    const mockProps2 = {
      onRequestRobots: jest.fn(),
      robots: [{
        id: 3,
        name: 'John',
        email: 'john@gmail.com'
      }],
      searchField: 'j',
      isPending: false
    }
    const wrapper2 = shallow(<MainPage { ...mockProps2 } />)
    expect(wrapper2.instance().filterRobots()).toEqual([{
      id: 3,
      name: 'John',
      email: 'john@gmail.com'
    }]);
  });

  it('filters robots correctly 2', () => {
    const mockProps3 = {
      onRequestRobots: jest.fn(),
      robots: [{
        id: 3,
        name: 'John',
        email: 'john@gmail.com'
      }],
      searchField: 'a',
      isPending: false
    }
    const filterRobots = []
    const wrapper3 = shallow(<MainPage { ...mockProps3 } />)
    expect(wrapper3.instance().filterRobots()).toEqual(filterRobots);
  });

  it('filters robots correctly 3', () => {
    const mockProps4 = {
      onRequestRobots: jest.fn(),
      robots: [],
      searchField: '',
      isPending: true
    }
    const filterRobots = []
    const wrapper4 = shallow(<MainPage { ...mockProps4 } />)
    expect(wrapper4.instance().filterRobots()).toEqual(filterRobots);
    expect(wrapper4.html()).toEqual('<h1 class=\"tc\">Loading Robots...</h1>');
  });


})