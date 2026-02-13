import { useState } from 'react'
import './app.scss'
import Dock from './components/Dock'
import Nav from './components/Nav'
import MacWindow from './components/windows/MacWindow'
import GitHub from './components/windows/GitHub'


function App() {
  return (
    <main>
      <Nav />
      <Dock/>

      <GitHub />
    </main>
  )
}

export default App
