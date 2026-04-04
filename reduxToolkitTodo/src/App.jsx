import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Todos from './components/Todos'
import Addtodo from './components/Addtodo'

function App() {

  return (
    <>
    <h1>Learn about redux toolkit</h1>
    <Addtodo />
    <Todos />
    </>
  )
}

export default App
