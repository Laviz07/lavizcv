import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../assets/rafi bening.png'
import HSocial from './HSocial'

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello i'm</h5>
        <h1>Muhammad Rafisyah Rizkiyawan</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA/>
        <HSocial/>
     
      <div className='me'>
        <img src={Me} alt="me"/>

      </div>
      <a href="#about" className='scroll__down'>Scroll Down &gt;&gt;&gt;</a>
      </div>
    </header>
  )
}

export default header