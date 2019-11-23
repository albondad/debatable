import React from 'react';
import Topic from '../Topic/Topic'

const topicSelection = (props) => {
    return(
      <div class="w-80 m-auto">
        <div className="container-fluid  w-75 m-auto">
          <div id='topics-container' class='row'>
            <div id='topics-title' className=' col-12'>SELECT A TOPIC</div>
            {props.topics.map(topic => {
              return (
                <Topic
                  name={topic.name}
                  numberOfRooms={topic.numberOfRooms}
                  numberOfUsers={topic.numberOfUsers}
                />
              )
            })}
          </div>
        </div>
      </div>
    )
}

export default topicSelection;
