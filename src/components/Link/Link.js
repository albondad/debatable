import React from 'react'

const link = (props) => {
  let click = () => {
    console.log('adsfasdfasdf')
  }
  return(
    <div className='link' onClick={props.onClick}>
      {props.name}
    </div>
  )
}

export default link;
