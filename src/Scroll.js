import React, {Component} from 'react';
import './Scroll.css';

class Scroll extends Component {
  render() {
    return (
      <div className='scroller'>
        {this.props.children}
      </div>
    );
  }
}

export default Scroll;