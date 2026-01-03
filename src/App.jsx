import React from 'react'
import gsap from 'gsap';
import { Navbar, Welcome, Dock } from '#components'
import { Draggable } from 'gsap/all'
import {Terminal, Safari, Resume} from '#windows';
gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar/>
      <Welcome/>
      <Dock/>
      <Terminal/>
      <Safari/>
      <Resume/>
      
    </main>
  )
}

export default App