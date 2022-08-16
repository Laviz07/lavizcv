import React from 'react'
import './portofolio.css'
import img1 from '../../assets/web tabel 1.png'
import img2 from '../../assets/form login 1.png'
import img3 from '../../assets/login 1.png'
import img4 from '../../assets/function 1.png'
import {IoLogoHtml5} from 'react-icons/io5'
import {IoLogoJavascript} from 'react-icons/io5'
import {IoLogoCss3} from 'react-icons/io'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';

const data = [
  {
    id: 1,
    image: img1,
    title: 'Tugas Membuat web dengan tabel',
    github: 'https://github.com/Laviz07/Tugas-Web-Tabel.git',
    logo: <IoLogoHtml5 className='logo'/>,
    bhs1: 'HTML'
  },
  {
    id: 2,
    image: img4,
    title: 'Tugas Membuat function dan array',
    github: 'https://github.com/Laviz07/Tugas-Fungsi---Array.git',
    logo: <IoLogoHtml5 className='logo'/>, 
    logo2: <IoLogoJavascript className='logo'/>,
    bhs1: 'HTML',
    bhs2: 'JavaScript'
  },
  {
    id: 3,
    image: img3,
    title: 'Tugas Membuat form login dan input type',
    github: 'https://github.com/Laviz07/Tugas-Form-Login-2.git',
    logo: <IoLogoHtml5 className='logo'/>,
    logo2:<IoLogoCss3 className='logo'/>,
    bhs1: 'HTML',
    bhs2: 'CSS'
  },
  {
    id: 4,
    image: img2,
    title: 'Tugas Membuat form login',
    github: 'https://github.com/Laviz07/Tugas-Form-LogIn',
    logo: <IoLogoHtml5 className='logo'/>,
    logo2: <IoLogoJavascript className='logo'/>,
    logo3: <IoLogoCss3 className='logo'/>,
    bhs1: 'HTML',
    bhs2: 'JavaScript',
    bhs3: 'CSS'
  },
]

const Portofolio = () => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <section id='portofolio'>
      <h5>My Recent Work</h5>
      <h2>Portofolio</h2>

      <div className='container portofolio__container'>
       {
        data.map(({id, image, title, github, logo, logo2, logo3, bhs1, bhs2, bhs3}) => {
          return (
            <article key={id} className='portofolio__item'>
            <div className='portofolio__item-image'>
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className='portofolio__item-cta'>
              <a href={github} className='btn' target='_blank'>GitHub</a> 
            <List className='portofolio__item'>
            <ListItemButton onClick={handleClick}>
                <ListItemText primary="Language used:" />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      {logo}
                    </ListItemIcon>
                    <ListItemText primary={bhs1} />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      {logo2}
                    </ListItemIcon>
                    <ListItemText primary={bhs2} />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      {logo3}
                    </ListItemIcon>
                    <ListItemText primary={bhs3} />
                  </ListItemButton>
                </List>
              </Collapse>
            </List>
            </div>
            </article>
          )
        })
       }
      </div>
    </section>
  )
}

export default Portofolio