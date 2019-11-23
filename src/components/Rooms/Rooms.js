import React from 'react';
import Room from '../Room/Room';

const rooms = (props) =>   {

  return(
    <div>
      <Room
        name='name 01'
        debators='debators'
        spectators='spectators'
        description='description'
        onClick={props.functions.showModal}
      />
      <Room
        name='name 01'
        debators='debators'
        spectators='spectators'
        description='description'
      />
      <Room
        name='name 01'
        debators='debators'
        spectators='spectators'
        description='description'
      />
      <Room
        name='name 01'
        debators='debators'
        spectators='spectators'
        description='description'
      />
    </div>
  )
}

export default rooms;
