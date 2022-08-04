import React from 'react'
import './footer.css'
import {RiInstagramLine} from 'react-icons/ri'
import {FaFacebookSquare} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import {BsYoutube} from 'react-icons/bs'
import {SiBlogger} from 'react-icons/si'

const footer = () => { 
  return (
    <footer id='footer'>
      <a href='#' className='footer__logo'>M RAFISYAH R XI RPL A</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portofolio'>Portofolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__social'>
        <a href="https://www.instagram.com/rafisyah_07/" target="_blank"><RiInstagramLine/></a>
        <a href="https://web.facebook.com/rafisyah.r" target="_blank"><FaFacebookSquare/></a>
        <a href="https://mail.google.com/" target="_blank"><MdEmail/></a>
        <a href="https://www.youtube.com/watch?v=a3Z7zEc7AXQ" target="_blank"><BsYoutube/></a>
        <a href="https://rafisyahtugas.blogspot.com/" target="_blank"><SiBlogger/></a>
      </div>

      <div className='footer__kopirek'>
        <small>&copy; Muhammad Rafisyah Rizkiyawan.<br/>All right reserved.</small>
      </div>
    </footer>
  )
}

export default footer