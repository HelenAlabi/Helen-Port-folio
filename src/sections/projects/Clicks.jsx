import React from 'react'
import './clicks.css';

const Clicks = ({children}) => {
  return (
    <div className= "clicks">
              {/* <a href="" className= 'btn primary'>Demo</a>
              <a href="" className='btn light'>Github</a> */}
              {children}
    </div>
  )
}

export default Clicks;