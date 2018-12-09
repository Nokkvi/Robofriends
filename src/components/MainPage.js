import React, {Component} from 'react';
import CardList from '../components/CardList';
import Header from '../components/Header';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

import './MainPage.css';

class MainPage extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  filterRobots = () => {
    return this.props.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
    });
  } 

  render() {
    const {onSearchChange, isPending} = this.props;
    
    return isPending ?
      <h1 className='tc'>Loading Robots...</h1> :
      (
        <div className='tc'>
          <div className='header'>
            <Header />
            <SearchBox searchChange={onSearchChange} />
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