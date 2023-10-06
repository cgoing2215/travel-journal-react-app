import React from 'react'
import EarthIcon from './img/earth-icon.png'

function Header() {
  return (
    <div id="header-container">
        <img src={EarthIcon}/>
        <h1>my travel journal.</h1>
    </div>
  )
}

export default Header