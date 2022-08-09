import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../assets/rafi bening.png'
import HSocial from './HSocial'
import {FiGithub} from 'react-icons/fi'

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
        <img src={Me} alt="me" title='Muhammad Rafisyah Rizkiyawan'/>
      </div>
        <a className='github' href='https://github.com/Laviz07/lavizcv' target='_blank'>See On GitHub&nbsp;&nbsp;< FiGithub/></a>
      </div>
    </header>
  )
}

export default header