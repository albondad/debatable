import React from 'react'
import RoomSelection from "../RoomSelections/RoomSelection"
import Home from "../Home/Home"
import Topics from "../Topics/Topics"
import TopicSelection from "../TopicSelection/TopicSelection"

const body = (props) => {
  return (
    <div>
      {/*SHOWING HOME PAGE*/}
      {
        props.showPageHome ?
        <Home />
        : null
      }

      {/*SHOWING TOPIC SELECTION PAGE*/}
      {
        props.showPageTopicSelection ?
        <TopicSelection topics={props.topics} functions={props.functions} />
        : null
      }
      {/*SHOWING ROOM SELECTION PAGE*/}
      {
        props.showPageRoomSelection ?
        <RoomSelection topics={props.topics} functions={props.functions} />
        : null
      }
    </div>
  )
}

export default body;
