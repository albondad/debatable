import React, {Component} from 'react';
import Navigation from '../Navigation/Navigation';
import Body from '../Body/Body';


class Layout extends Component {
  state = {
    showPageHome: false,
    showPageTopicSelection: false,
    showPageRoomSelection: false,
    showLinkHome: false,
    showLinkTopic: false,
  }

  render() {
    return(
      <div>
        <Navigation
        showLinkHome={this.state.showLinkHome}
        showLinkTopic={this.state.showLinkTopic}
        />
        <Body
          showHome={this.state.showPageHome}
          showTopicSelection={this.state.showPageTopicSelection}
          showRoomSelection={this.state.showPageRoomSelection}

        />
      </div>
    )
  }
}

export default Layout;
