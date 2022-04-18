import React from 'react'
import './header.scss'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Leonardo Muniz</h1>
        <h5 className="text-light">Front end Developer</h5>
      </div>
    </header>
  )
}

export default Header
