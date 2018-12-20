import React, {Component} from 'react';

class SearchBox extends Component<{searchfield: string, searchChange: any}, {}> {
  render() {
    const {searchfield, searchChange} = this.props;
    return (
      <div className='pa2'>
        <input 
          aria-label='Search Robots'
          className='pa3 ba b--green bg-lightest-blue'
          type='search' 
          placeholder='search robots'
          value={searchfield}
          onChange={searchChange} 
        />
      </div>
    );
  }
}

export default SearchBox;