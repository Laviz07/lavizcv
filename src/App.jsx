import React from 'react'
import Header from './component/header/Header' 
import Nav from './component/nav/Nav'
import About from './component/about/About'
import Experience from './component/experience/Experience'
import Portofolio from './component/portofolio/Portofolio'
import Contact from './component/contact/Contact'
import Footer from './component/footer/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portofolio />
      <Contact />
      <Footer />
    </>
  )
}

export default App