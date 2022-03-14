import React from 'react'
import Error404 from "./../../assets/image/Error404.png"

const NotFound = () => {
  return (
    <div className='not-found'>
      <a href='/'><img src={Error404} alt="Error 404" width="626" height="577"></img></a>
    </div>
  )
}

export default NotFound