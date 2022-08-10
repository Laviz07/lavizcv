import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BiUser} from 'react-icons/bi'
import {BiBookAlt} from 'react-icons/bi'
import {BsTelephone} from 'react-icons/bs'
import {AiOutlineFile} from 'react-icons/ai'
import {FaUserAstronaut} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const Nav = () => {

  return (
    <nav>
      <ul>
        <li><Link to="/" ><AiOutlineHome className='nicon'/>Home</Link></li>
        <li><Link to="/about"><BiUser className='nicon'/>  About</Link></li>
        <li><Link to="/experience"><BiBookAlt className='nicon'/>  Experience</Link></li>
        <li><Link to="/portofolio"><AiOutlineFile className='nicon'/>  Portofolio</Link></li>
        <li><Link to="/contact"><BsTelephone className='nicon'/>  Contact</Link></li>
        <li className='rafi'><a href='https://github.com/Laviz07' target="_blank"><FaUserAstronaut className='nicon'/>&nbsp;&nbsp;RAFISYAH</a></li>
      </ul>
    </nav>
  )
}

export default Nav