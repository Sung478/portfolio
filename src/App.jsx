import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import { NavBar } from './Components/NavBar/Navbar'
import { Home } from './Components/Home/Home'
import { AboutMe } from './Components/AboutMe/AboutMe'
import { Experiences } from './Components/Experiences/Experiences'
import { Skills } from './Components/Skills/Skills'
import { Projects } from './Components/Projects/Projects'
import { Contact } from './Components/Contact/Contact'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <AboutMe/>
      <Experiences/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
