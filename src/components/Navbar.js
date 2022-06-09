import React from 'react'
import reactLogo from '../images/logo192.png'

export default function Navbar() {
  return (
    <nav className='nav'>
      <div className='logo'>
      <img src={reactLogo} alt='logo-img' width='29.93px'/ >
      <h1>ReactFacts</h1>
      </div>
      <h2 className='header'>React Course - Project 1</h2>
    </nav>
  )
}
