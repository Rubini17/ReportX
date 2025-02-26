import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './components/signup'
import Login from './components/login'
import Navbar1 from './components/navbar1'
import Home from './components/home'
function App() {
  

  return (
    <main>
      <BrowserRouter>
      <Navbar1/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>

    </main>
  )
}

export default App;
