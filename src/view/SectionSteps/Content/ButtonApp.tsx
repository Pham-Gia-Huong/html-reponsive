import React from 'react'

const ButtonApp = ({src}:{src:string}) => {
  return (
    <a href="#" className="btn-app">
      <img src={src} alt="btn-app"/>
    </a>
  )
}

export default ButtonApp