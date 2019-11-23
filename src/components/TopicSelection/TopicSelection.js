import React from 'react';
import Topics from '../Topics/Topics'

const topicSelection = (props) => {
    return(
      <div>
        <Topics topics={props.topics}/>
      </div>
    )
}

export default topicSelection;
