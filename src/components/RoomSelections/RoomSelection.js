import React from 'react';
import Rooms from '../Rooms/Rooms'

const roomSelection = (props) =>   {

  return(
    <div>
      <div className='container-fluid w-75 m-auto'>
        <div className='row'>
        <div className='col-6'>
          <div className='roomsSelection-title'>Rooms</div>
          <Rooms functions={props.functions}/>
        </div>
        <div className='col-6'>
          <div className='roomsSelection-title'>Description</div>
          <div className='roomsSelection-description'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but also the leap into elec
          </div>
          <div className='roomsSelection-title'>Create Room</div>
          <input placeholder='username'/>
          <input placeholder='room name'/>
          <input placeholder='room description'/>
          <button>SUBMIT</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default roomSelection;
