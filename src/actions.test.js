import * as actions from './actions';
import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from './constants';

import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureMockStore([thunkMiddleware])

describe('setSearchField', () => {
  it('should create an action to search robots', () => {
    const text = 'wooo';
    const expectedAction = {
      type: CHANGE_SEARCH_FIELD,
      payload: text
    }
    expect(actions.setSearchField(text)).toEqual(expectedAction)
  });
})

describe('requestRobots', () => {
  const store = mockStore();
  beforeEach(() => {
    store.clearActions();
    store.dispatch(actions.requestRobots());
  });
  
  it('handles requesting robots API', async () => {
    expect(await getAction(store, REQUEST_ROBOTS_PENDING)).toEqual({ type: REQUEST_ROBOTS_PENDING })
    expect((await getAction(store, REQUEST_ROBOTS_SUCCESS)).type).toEqual(REQUEST_ROBOTS_SUCCESS)
  });
})

//UTILS

function findAction(store, type) {
  return store.getActions().find(action => action.type === type);
}

export function getAction(store, type) {
  const action = findAction(store, type);
  if (action) return Promise.resolve(action);

  return new Promise(resolve => {
    store.subscribe(() => {
      const action = findAction(store, type);
      if (action) resolve(action);
    });
  });
}