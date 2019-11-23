import React, {Component} from 'react';
import Navigation from '../Navigation/Navigation';
import Body from '../Body/Body';


class Layout extends Component {
  state = {
    showPageHome: true,
    showPageTopicSelection: false,
    showPageRoomSelection: false,
    topics: [
      {name: 'POLITICS', numberOfRooms: 0, numberOfUsers: 0},
      {name: 'ECONOMICS', numberOfRooms: 0, numberOfUsers: 0},
      {name: 'SPORTS', numberOfRooms: 0, numberOfUsers: 0},
      {name: 'CURRENT EVENTS', numberOfRooms: 0, numberOfUsers: 0},
      {name: 'TECHNOLOGY', numberOfRooms: 0, numberOfUsers: 0},
    ],
  }

  showTopics = () => {
    this.setState({showPageHome: false, showPageTopicSelection: true, showPageRoomSelection: false});
  }
  showHome = () => {
    this.setState({showPageHome: true, showPageTopicSelection: false, showPageRoomSelection: true});
  }

  render() {
    return(
      <div>
        <Navigation
          showPageHome={this.state.showPageHome}
          functions={{
            showTopics: this.showTopics,
            showHome: this.showHome,
          }}
        />
        <Body
          showPageHome={this.state.showPageHome}
          showPageTopicSelection={this.state.showPageTopicSelection}
          showPageRoomSelection={this.state.showPageRoomSelection}
          topics={this.state.topics}
        />
      </div>
    )
  }
}

export default Layout;
