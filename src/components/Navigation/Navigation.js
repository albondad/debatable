import React from 'react';
import Logo from '../Logo/Logo'
import Links from '../Links/Links'

const navigation = () => {
  return(
    <div id='navigation'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-6'>
            <Logo />
          </div>
          <div className='col-6'>
            <Links />
          </div>
        </div>
      </div>
    </div>
  )
}

export default navigation;
