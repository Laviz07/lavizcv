import React from 'react'
import './about.css'
import Me from '../../assets/rafi asli - Salin.jpg'
import {FaBirthdayCake} from 'react-icons/fa'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {BsGenderMale} from 'react-icons/bs'
import {RiRoadMapFill} from 'react-icons/ri'

const About = () => {
  return (
    <section id='about'>
      <h5>Description</h5>
      <h2>About Me</h2>

    <div className='container about__container'>
      <div className='about__me'>
        <div className='about__me-image'>
          <img src={Me} alt='about image'/>
        </div>
      </div>

      <div className='about__content'>
        <div className=' about__cards'>
          <article className='about__card'>
            <FaBirthdayCake className="about__icon" />
            <h5>Date of Birth</h5>
            <small>9 Januari 2006</small>
          </article>

          <article className=' about__card'>
            <BsFillMoonStarsFill className="about__icon" />
            <h5>Religion</h5>
            <small>Islam</small>
          </article>

          <article className='about__card'>
            <BsGenderMale className="about__icon" />
            <h5>Gender</h5>
            <small>Laki-Laki / Male</small>
          </article>
          </div>
          <div className=' about__cardl'>
          <article className='about__card'>
            <RiRoadMapFill className="about__icon" />
            <h5>Address</h5>
            <small><a href='https://www.google.com/maps/place/Jl.+Bungur+7+No.78,+RT.006%2FRW.010,+Jakasampurna,+Kec.+Bekasi+Bar.,+Kota+Bks,+Jawa+Barat+17145/@-6.2382411,106.9770393,20z/data=!4m5!3m4!1s0x2e698c4403d7a57b:0xd6a09607da999db5!8m2!3d-6.2381498!4d106.9769636' target="_blank">Jl Bungur 7, No. 78, RT.12/RW.07, Kel Jakasampurna, Kec Bekasi Barat, Kota Bekasi, Jawa Barat</a></small>
          </article>
          </div>

        <p>
        Halo, saya adalah seorang siswa dari program studi Rekayasa Perangkat lunak.
        Memiliki ketertarikan terhadap dunia teknologi terutama tentang programing.
        </p>

        <a href="#contact" className='btn btn-primary'>Lets Talk</a>
      </div>
    </div>

    </section>
  )
}

export default About