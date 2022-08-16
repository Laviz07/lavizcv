import React, { useState } from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../assets/rafi bening.png'
import HSocial from './HSocial'
import {FiGithub} from 'react-icons/fi'

const Header = ({datas}) => {
  const {nama, setNama} = datas
  const {job, setJob} = datas
  const {helo, setHelo} =datas
  const [ulang, setUlang] = useState(false)

  function orang(){
      setNama("Muhammad Rafisyah Rizkiyawan"); 
  }
  function kerja(){
    setUlang(!ulang);
    setJob(ulang ? "Software Engineer" : 'Rekayasa Perangkat Lunak');
  }
  function halo(){
    setUlang(!ulang);
    setHelo(ulang ? "Hello i'am" : 'Assalamualaikum');
  }

  return (
    <header>
      <div className="container header__container">
        <h5 >{helo}</h5>
        <h1>{nama}</h1>
        <h5 className='text-light'>{job}</h5><br/>
        <button className='btn btn-primary' onClick={() => {halo(); orang(); kerja()}}><i>Waalaikumsalam</i></button>
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

export default Header