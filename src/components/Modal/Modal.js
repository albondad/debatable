import React from 'react';
import Auxiliary from '../Auxiliary/Auxiliary';

const modal = (props) =>   {

  return(
    <div>
      <div id='modal-backdrop' onClick={props.onClick}></div>
      <div id='modal-content'>
        <div className='w-75 m-auto'>
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default modal;
