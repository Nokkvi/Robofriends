import React, {Component} from 'react';
import Card from './Card';

import { IRobot } from './interfaces.d';

class CardList extends Component<{robots: IRobot[]}, {}> {
  render() {
    const {robots} = this.props;
    return (
      <div>
        {
          robots.map((user: IRobot, i: number) => {
            return (
              <Card 
              key={i} 
              robot={user}
              />
            );
          })
        }
      </div>
    )
  }
}

export default CardList;