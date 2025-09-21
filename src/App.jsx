import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar1 from './Components/Navbar1'
import Home from './Components/Home'
import About from './Components/About'
import Social from './Components/Social'
import Skill from './Components/Skill'
import Education from './Components/Education'
import Footer from './Components/Footer'
import DarkMode from './Components/DarkMode'
import Projects1 from './Components/Projects1';
import Experience from './Components/Experience';

const App = () => {
  return (
    <div>
      <Navbar1/>
      <Home/>
      <About/>
      <Social/>
      <Experience/>
      <DarkMode/>
      <Projects1/>
      <Skill/>
      <Education/>
      <Footer/>
      
    </div>
  )
}

export default App