import React from 'react'
import CV from '../../assets/CV.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href= {CV} download className='btn btn-variant'>Download My CV</a>
        <a href="#contact" className='btn btn-primary'>lets talk</a>
    </div>
  )
}

export default CTA