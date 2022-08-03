import React from 'react'
import './portofolio.css'
import img1 from '../../assets/web tabel 1.png'
import img2 from '../../assets/form login 1.png'
import img3 from '../../assets/login 1.png'
import img4 from '../../assets/function 1.png'

const data = [
  {
    id: 1,
    image: img1,
    title: 'Tugas Membuat web dengan tabel',
    github: 'https://github.com/Laviz07/Tugas-Web-Tabel.git',
  },
  {
    id: 2,
    image: img4,
    title: 'Tugas Membuat function dan array',
    github: 'https://github.com/Laviz07/Tugas-Fungsi---Array.git',
  },
  {
    id: 3,
    image: img3,
    title: 'Tugas Membuat form login dan input type',
    github: 'https://github.com/Laviz07/Tugas-Form-Login-2.git',
  },
  {
    id: 4,
    image: img2,
    title: 'Tugas Membuat form login',
    github: 'https://github.com',
  },
]

const portofolio = () => {
  return (
    <section id='portofolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portofolio__container'>
       {
        data.map(({id, image, title, github}) => {
          return (
            <article key={id} className='portofolio__item'>
            <div className='portofolio__item-image'>
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className='portofolio__item-cta'>
              <a href={github} className='btn' target='_blank'>GitHub</a>
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