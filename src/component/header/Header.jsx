import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../assets/rafi bening.png'
import HSocial from './HSocial'
import {FiGithub} from 'react-icons/fi'

const header = ({datas}) => {
  const {nama, setNama} = datas
  const {job, setJob} = datas
  const {helo, setHelo} =datas

  function orang(){
      setNama("Muhammad Rafisyah Rizkiyawan"); 
  }
  function kerja(){
    setJob("Software Engineer");
  }
  function halo(){
    setHelo("Hello i'am");
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

export default header