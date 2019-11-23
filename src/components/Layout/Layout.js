import React, {Component} from 'react';
import Navigation from '../Navigation/Navigation';
import Body from '../Body/Body';
import Modal from '../Modal/Modal'


class Layout extends Component {
  state = {
    showModal: false,
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

  showTopicsSelection = () => {
    this.setState({showPageHome: false, showPageTopicSelection: true, showPageRoomSelection: false});
  }
  showHome = () => {
    this.setState({showPageHome: true, showPageTopicSelection: false, showPageRoomSelection: false});
  }
  showRoomSelection = () => {
    this.setState({showPageHome: false, showPageTopicSelection: false, showPageRoomSelection: true});
  }
  showModal = () => {
    this.setState({showModal: true});
  }
  hideModal = () => {
    this.setState({showModal: false});
  }

  render() {
    return(
      <div>
        {
          this.state.showModal ?
          <Modal onClick={this.hideModal}>
            <div id='modal-joinRoom'>JOIN ROOM</div>
            <input placeholder='username'/>
            <button>SUBMIT</button>
          </Modal>
          : null
        }
        <Navigation
          showPageHome={this.state.showPageHome}
          functions={{
            showTopicsSelection: this.showTopicsSelection,
            showHome: this.showHome,
          }}
        />
        <Body
          showPageHome={this.state.showPageHome}
          showPageTopicSelection={this.state.showPageTopicSelection}
          showPageRoomSelection={this.state.showPageRoomSelection}
          topics={this.state.topics}
          functions={{
            showRoomSelection: this.showRoomSelection,
            showModal: this.showModal,
          }}
        />
      </div>
    )
  }
}

export default Layout;
