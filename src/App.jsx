import { useState, useEffect } from 'react'
import gsap from 'gsap'
import './App.css'
import Header from './Components/Header'
import Opening from './Components/opening'

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
      <Header />
      <Opening />
    </div>
  )
}

export default App

