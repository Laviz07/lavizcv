import React from 'react'
import './portofolio.css'
import img1 from '../../assets/web tabel 1.png'
import img2 from '../../assets/form login 1.png'
import img3 from '../../assets/login 1.png'
import img4 from '../../assets/function 1.png'
import {IoLogoHtml5} from 'react-icons/io5'
import {IoLogoJavascript} from 'react-icons/io5'
import {IoLogoCss3} from 'react-icons/io'

const data = [
  {
    id: 1,
    image: img1,
    title: 'Tugas Membuat web dengan tabel',
    github: 'https://github.com/Laviz07/Tugas-Web-Tabel.git',
    logo: <IoLogoHtml5/>,
  },
  {
    id: 2,
    image: img4,
    title: 'Tugas Membuat function dan array',
    github: 'https://github.com/Laviz07/Tugas-Fungsi---Array.git',
    logo: <IoLogoHtml5/>, 
    logo2: <IoLogoJavascript/>,
  },
  {
    id: 3,
    image: img3,
    title: 'Tugas Membuat form login dan input type',
    github: 'https://github.com/Laviz07/Tugas-Form-Login-2.git',
    logo: <IoLogoHtml5/>,
    logo2:<IoLogoCss3/>,
  },
  {
    id: 4,
    image: img2,
    title: 'Tugas Membuat form login',
    github: 'https://github.com',
    logo: <IoLogoHtml5/>,
    logo2: <IoLogoCss3/>,
    logo3: <IoLogoJavascript/>
  },
]

const portofolio = () => {
  return (
    <section id='portofolio'>
      <h5>My Recent Work</h5>
      <h2>Portofolio</h2>

      <div className='container portofolio__container'>
       {
        data.map(({id, image, title, github, logo, logo2, logo3}) => {
          return (
            <article key={id} className='portofolio__item'>
            <div className='portofolio__item-image'>
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className='portofolio__item-cta'>
              <a href={github} className='btn' target='_blank'>GitHub</a> 
            <div className='logo'>
              {logo}  {logo2}  {logo3}
            </div>
            </div>
            </article>
          )
        })
       }
      </div>
    </section>
  )
}

export default portofolio