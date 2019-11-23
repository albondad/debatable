import React from 'react';

const topic = (props) => {
    return(
      <div className='col-sm-12 col-md-6 col-lg-4' onClick={props.onClick}>
        <div className='topic-content'>
          <div className='topic-title'>{props.name}</div>
        </div>
      </div>
    )
}

export default topic;
