import { useState, useEffect } from 'react'
import gsap from 'gsap'
import './App.css'
import Header from './Components/Header.jsx'
import Opening from './Components/Opening.jsx'
import About from './Components/About.jsx'
import Project from './Components/Project.jsx'
import Contact from './Components/Contact.jsx'
import ClassOf2024 from './Components/AboutAch/ClassOf2024.jsx'
import DiZiGui from './Components/AboutAch/DiZiGui.jsx'
import Taekwondo from './Components/AboutAch/Taekwondo.jsx'
import HSK2 from './Components/AboutAch/HSK2.jsx'
import DuJingBan from './Components/AboutAch/DuJingBan.jsx'
import Pramuka from './Components/AboutAch/Pramuka.jsx'
import Webinar from './Components/AboutAch/Webinar.jsx'
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
          <Route path="/ClassOf2024" element={<ClassOf2024/>} />
          <Route path="/DiZiGui" element={<DiZiGui/>} />
          <Route path="/Taekwondo" element={<Taekwondo/>} />
          <Route path="/HSK2" element={<HSK2/>} />
          <Route path="/DuJingBan" element={<DuJingBan/>} />
          <Route path="/Pramuka" element={<Pramuka/>} />
          <Route path="/Webinar" element={<Webinar/>} />
        </Routes>
      </Routers>
    </div>
  )
}

export default App