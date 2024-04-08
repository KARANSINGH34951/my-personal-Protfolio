import React, { useState } from 'react'
import './App.css'

import Navbar from './components/Navbar.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Myvision from './components/Myvision.jsx'
import Particles from '@tsparticles/react'
import ParticlesComponent from './components/ParticlesComponents.jsx'
import Skills from './components/Skills.jsx'
import html from './data/html.jpeg'
import css from './data/css.png'
import js from './data/js.png'
import cloud from './data/cloud.png'
import react from './data/react.jpg'
import python from './data/python.jpeg'
import github from './data/github.jpeg'
import tailwind from './data/tailwind1.png'
import bootstrap from './data/bootstrap.jpeg'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'




function App() {
  const [count, setCount] = useState(0)

  
  return (

    <>
      <ParticlesComponent id="tsparticles" />
      <Navbar /> 
      <About /> 
      <Skills img1={html} img2={css} img3={js} img4={react} img5={python}  img6={tailwind} img7={bootstrap} img8={github} img9={cloud}/>
      <Projects />
      <Myvision />
      <Contact />
      <Footer />
      
      

      
      {/* <ParticleComponent id='tsparticles' /> */}


      
    </>
  )
}

export default App
































