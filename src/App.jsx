import React, { useState } from 'react'
import Header from './component/header/Header' 
import Nav from './component/nav/Nav'
import About from './component/about/About'
import Experience from './component/experience/Experience'
import Portofolio from './component/portofolio/Portofolio'
import Contact from './component/contact/Contact'
import Footer from './component/footer/Footer'
import NotFound from './component/NotFound'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

const App = () => {
  const [helo, setHelo] = useState('')
  const [nama, setNama] = useState('Assalamualaikum')
  const [job, setJob] = useState('')

  const datas = {
    nama, setNama, job, setJob, helo,setHelo
  }

  return (
    <Router>
    <>
      <Nav />
      <Routes>
        <Route exact path="/"element={<Header datas={datas} />}/>
        <Route exact path="/about"element={<About/>}/>
        <Route exact path="/experience"element={<Experience/>}/>
        <Route exact path="/portofolio"element={<Portofolio/>}/>
        <Route exact path="/contact"element={<Contact/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </>
    </Router>
  )
}

export default App