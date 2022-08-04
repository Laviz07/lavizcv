import React from 'react'
import './experience.css'
import {AiFillHtml5} from 'react-icons/ai'
import {SiJavascript} from 'react-icons/si'
import {IoLogoCss3} from 'react-icons/io'
import {FaReact} from 'react-icons/fa'
import {FaSchool} from 'react-icons/fa'
import {IoSchoolSharp} from 'react-icons/io5'
import {RiComputerFill} from 'react-icons/ri'

const experience = () => {
  return (
    <section id='experience'>
       <h5>What Skills I Have</h5>
       <h2>My Experience & Education</h2>

       <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
          <article className='experience_details'>
                <AiFillHtml5 className='experience__details-icon'/>
                <div>
                <h4>HTML</h4>           
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
                <SiJavascript className='experience__details-icon'/>
                <div>
                <h4>JavaScript</h4>           
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
                <IoLogoCss3 className='experience__details-icon'/>
                <div>
                <h4>CSS</h4>           
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
                <FaReact className='experience__details-icon'/>
                <div>
                <h4>React JS</h4>           
                <small className='text-light'>Beginner</small>
              </div>
            </article>
          </div> 
        </div>
        <div className='experience__edu'>
          <h3>Education</h3>
          <div className='experience__content'>
          <article className='experience_details edu'>
                <FaSchool className='experience__details-icon'/>
                <div>
                <h4>SDN Jakasampurna VII</h4>           
                <small className='text-light'>2012 - 2018</small>
                </div>
            </article>
            <article className='experience_details'>
                <IoSchoolSharp className='experience__details-icon'/>
                <div>
                <h4>SMP Martia Bhakti</h4>           
                <small className='text-light'>2018 - 2021</small>
              </div>
            </article>
            <article className='experience_details'>
                <RiComputerFill className='experience__details-icon'/>
                <div>
                <h4>SMKN 1 Kota Bekasi</h4>           
                <small className='text-light'>Rekayasa Perangkat Lunak / 2021 - 2022</small>
              </div>
            </article>
          </div>  
        </div>
       </div>
    </section>
  )
}

export default experience