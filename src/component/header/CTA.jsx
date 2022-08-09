import React from 'react'
import CV from '../../assets/CV.pdf'
import {Link} from 'react-router-dom'

const CTA = () => {
  return (
    <div className='cta'>
        <a href= {CV} download className='btn btn-variant'>Download My CV</a>
        <Link to="/contact" className="btn btn-primary">Lets Talk</Link>
    </div>
  )
}

export default CTA