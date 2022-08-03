import React from 'react'
import {RiInstagramLine} from 'react-icons/ri'
import {FaFacebookSquare} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'

const HSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.instagram.com/rafisyah_07/" target="_blank"><RiInstagramLine/></a>
        <a href="https://web.facebook.com/rafisyah.r" target="_blank"><FaFacebookSquare/></a>
        <a href="https://mail.google.com/" target="_blank"><MdEmail/></a>
    </div>
  )
}

export default HSocial