import React from 'react'
import gsap from 'gsap';
import { Navbar, Welcome, Dock } from '#components'
import { Draggable } from 'gsap/all'
import Terminal from '#windows/terminal';
gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar/>
      <Welcome/>
      <Dock/>
      <Terminal/>
    </main>
  )
}

export default App