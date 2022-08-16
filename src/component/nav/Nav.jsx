import './nav.css'
import * as React from 'react';
import {AiOutlineHome} from 'react-icons/ai'
import {BiUser} from 'react-icons/bi'
import {BiBookAlt} from 'react-icons/bi'
import {BsTelephone} from 'react-icons/bs'
import {AiOutlineFile} from 'react-icons/ai'
import {ImGithub} from 'react-icons/im'
import {IoLogoVercel} from 'react-icons/io5'
import {Link} from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

const Nav = () => {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar sx={{position:"fixed", maxHeight:60, padding:0, backgroundColor: '#2b2b6b'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            CV // PORTFOLIO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
                <MenuItem onClick={handleCloseNavMenu}><Link to="/" ><AiOutlineHome className='nicon'/>&nbsp;&nbsp;Home</Link></MenuItem>
                <MenuItem onClick={handleCloseNavMenu}><Link to="/about"><BiUser className='nicon'/>&nbsp;&nbsp;About</Link></MenuItem>
                <MenuItem onClick={handleCloseNavMenu}><Link to="/experience"><BiBookAlt className='nicon'/>&nbsp;&nbsp;Experience</Link></MenuItem>
                <MenuItem onClick={handleCloseNavMenu}><Link to="/portofolio"><AiOutlineFile className='nicon'/>&nbsp;&nbsp;Portofolio</Link></MenuItem>
                <MenuItem onClick={handleCloseNavMenu}><Link to="/contact"><BsTelephone className='nicon'/>&nbsp;&nbsp;Contact</Link></MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 1,
              mt: 1,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            PORTFOLIO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }}}>
                <Link to="/" className='datar'><AiOutlineHome className='nicon'/>  Home</Link>
                <Link to="/about" className='datar'><BiUser className='nicon'/>  About</Link>
                <Link to="/experience" className='datar'><BiBookAlt className='nicon'/>  Experience</Link>
                <Link to="/portofolio" className='datar'><AiOutlineFile className='nicon'/>  Portofolio</Link>
                <Link to="/contact" className='datar'><BsTelephone className='nicon'/>  Contact</Link>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open Profile">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Muhammad Rafisyah Rizkiyawan" src= "https://ih0.redbubble.net/image.510122517.9911/flat,800x800,075,f.u2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
                <MenuItem onClick={handleCloseUserMenu}><a href='https://github.com/Laviz07' target="_blank"><ImGithub className='nicon'/>&nbsp;&nbsp;GitHub</a></MenuItem>
                <MenuItem onClick={handleCloseUserMenu}><a href='https://vercel.com/laviz07' target="_blank"><IoLogoVercel className='nicon'/>&nbsp;&nbsp;Vercel</a></MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Nav