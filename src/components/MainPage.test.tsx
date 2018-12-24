import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';
import { IRobot, IMainPageProps } from './interfaces.d';

describe('ErrorBoundry component', () => {
  let wrapper: ShallowWrapper<any, {}>;
  beforeEach(() => {
    const mockProps = {
      onRequestRobots: jest.fn(),
      onSearchChange: jest.fn(),
      robots: [],
      searchField: '',
      isPending: false,
    };
    wrapper = shallow<MainPage>(<MainPage { ...mockProps }/>);
  });

  it('renders MainPage without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('filters robots correctly', () => {
    const mockProps2 = {
      onRequestRobots: jest.fn(),
      onSearchChange: jest.fn(),
      robots: [{
        id: 3,
        name: 'John',
        email: 'john@gmail.com',
      }],
      searchField: 'j',
      isPending: false,
    };
    const wrapper2 = shallow<MainPage>(<MainPage { ...mockProps2 } />);
    expect(wrapper2.instance().filterRobots()).toEqual([{
      id: 3,
      name: 'John',
      email: 'john@gmail.com',
    }]);
  });

  it('filters robots correctly 2', () => {
    const mockProps3 = {
      onRequestRobots: jest.fn(),
      onSearchChange: jest.fn(),
      robots: [{
        id: 3,
        name: 'John',
        email: 'john@gmail.com',
      }],
      searchField: 'a',
      isPending: false,
    };
    const filterRobots: IRobot[] = [];
    const wrapper3 = shallow<MainPage>(<MainPage { ...mockProps3 } />);
    expect(wrapper3.instance().filterRobots()).toEqual(filterRobots);
  });

  it('filters robots correctly 3', () => {
    const mockProps4 = {
      onRequestRobots: jest.fn(),
      onSearchChange: jest.fn(),
      robots: [],
      searchField: '',
      isPending: true,
    };
    const filterRobots: IRobot[] = [];
    const wrapper4 = shallow<MainPage>(<MainPage { ...mockProps4 } />);
    expect(wrapper4.instance().filterRobots()).toEqual(filterRobots);
    expect(wrapper4.html()).toEqual('<h1 class=\"tc\">Loading Robots...</h1>');
  });

});
