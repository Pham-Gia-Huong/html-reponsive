import React from 'react'
import Content from './Content'
import Navigation from './Nav'
import './index.scss'
const Header = () => {
  return (
    <header>
      <Navigation/>
      <Content/>
    </header>
  )
}

export default Header