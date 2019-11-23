import React from 'react';
import Link from '../Link/Link';
import Auxiliary from '../Auxiliary/Auxiliary'

const links = (props) => {
  return(
    <Auxiliary>
      {
        props.showPageHome ?
        <Link name='Topics' onClick={props.functions.showTopics}/>
        : <Link name='Home' onClick={props.functions.showHome}/>
      }

    </Auxiliary>
  )
}

export default links;
