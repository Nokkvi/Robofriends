import React, {Component, FormEvent} from 'react';
import {connect} from 'react-redux';
import MainPage from '../components/MainPage';

import {setSearchField, requestRobots} from '../actions';
import { IMainPageProps } from '../components/interfaces';

interface IAppState {
  searchRobots: {searchField: string};
  requestRobots: {robots: any, isPending: boolean, error: string};
}

const mapStateToProps = (state: IAppState) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    onSearchChange: (event: FormEvent<HTMLInputElement>) => dispatch(setSearchField(event.currentTarget.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

class App extends Component {
  render() {
    return <MainPage { ...this.props }/>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);