import React, {Component} from 'react';
import Navigation from '../Navigation/Navigation';
import Body from '../Body/Body';

class Layout extends Component {
  state = {
  }

  render() {
    return(
      <div>
        <Navigation />
        <Body />
      </div>
    )
  }
}

export default Layout;
