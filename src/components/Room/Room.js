import React from 'react';

const room = (props) =>   {

  return(
    <div class='room-container'>
      <div className='room-nameAndNumbers'>{props.name} {props.debators} {props.spectators}</div>
      <div className='room-description'>{props.description}</div>
    </div>
  )
}

export default room;
