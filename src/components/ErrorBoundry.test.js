import { shallow } from 'enzyme';
import React from 'react';
import ErrorBoundry from './ErrorBoundry';
import { wrap } from 'module';

describe('ErrorBoundry component', () => {
  it('expects to render ErrorBoundry component', () => {
    expect(shallow(<ErrorBoundry />)).toMatchSnapshot();
  });

  it('expects Errorboundry to have correct initial state', () => {
    const wrapper = shallow(<ErrorBoundry />);
    expect(wrapper.instance().state.hasError).toBe(false);
  });

  it('expects hasError to be true when there is an error', () => {
    const wrapper = shallow(<ErrorBoundry />);
    expect(wrapper.instance().state.hasError).toBe(false);
    wrapper.instance().componentDidCatch();
    expect(wrapper.instance().state.hasError).toBe(true);
  });
})