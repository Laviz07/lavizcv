import React from 'react'
import Header from './component/header/Header' 
import Nav from './component/nav/Nav'
import About from './component/about/About'
import Experience from './component/experience/Experience'
import Portofolio from './component/portofolio/Portofolio'
import Contact from './component/contact/Contact'
import Footer from './component/footer/Footer'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

const App = () => {
  return (
    <Router>
    <>
      <Nav />
      <Routes>
        <Route exact path="/"element={<Header/>}/>
        <Route exact path="/about"element={<About/>}/>
        <Route exact path="/experience"element={<Experience/>}/>
        <Route exact path="/portofolio"element={<Portofolio/>}/>
        <Route exact path="/contact"element={<Contact/>}/>
      </Routes>
      <Footer/>
    </>
    </Router>
  )
}

export default App