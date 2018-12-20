import React, {Component} from 'react';
import CardList from './CardList';
import Header from './Header';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import ErrorBoundry from './ErrorBoundry';

import { IMainPageProps } from './interfaces.d';

import './MainPage.css';

class MainPage extends Component<any, {}> {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  filterRobots = () => {
    return this.props.robots.filter((robot: any) => {
      return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
    });
  } 

  render() {
    const {onSearchChange, isPending, searchField} = this.props;
    
    return isPending ?
      <h1 className='tc'>Loading Robots...</h1> :
      (
        <div className='tc'>
          <div className='header'>
            <Header />
            <SearchBox searchfield={searchField} searchChange={onSearchChange} />
          </div>
          <Scroll>
            <ErrorBoundry>
              <CardList robots={this.filterRobots()} />
            </ErrorBoundry>
          </Scroll>
        </div>
      );
  }
}

export default MainPage;