import { useState, useEffect } from 'react'
import gsap from 'gsap'
import './App.css'
import Header from './Components/Header.jsx'
import Opening from './Components/Opening.jsx'
import About from './Components/About.jsx'
import Project from './Components/Project.jsx'
import Contact from './Components/Contact.jsx'
import { BrowserRouter as  Routers,Routes, Route } from 'react-router-dom'

function App() {
  
  useEffect(() => {

    gsap.fromTo('.App', {
      opacity: 0,
      duration: 1,
      y: -100
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power4.out',
    })
  }, [])

  return (
    
    <div className='App'>
      <Routers>
        <Routes>
          <Route path="/" element={<Header/>} />
          <Route path="/Home" element={<Opening/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Project" element={<Project/>} />
          <Route path="/Contact" element={<Contact/>} />
        </Routes>
      </Routers>
    </div>
  )
}

export default App

