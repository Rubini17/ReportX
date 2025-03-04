import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './components/signup'
import Login from './components/login'
import Navbar1 from './components/navbar1'
import Home from './components/home'
import Dashboard from './components/dashboard'
import Report from './components/report';
import Status from './components/status';
import AdminLogin from './components/adminLogin'
import AdminStatus from './components/adminStatus'
function App() {
  

  return (
    <main>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/report' element={<Report/>}/>
        <Route path='/status' element={<Status/>}/>
        <Route path='/adminstatus' element={<AdminStatus/>}/>
        <Route path='/adminlogin' element={<AdminLogin/>}/>
        <Route path='/navbar1' element={<Navbar1/>}/>
      </Routes>
      </BrowserRouter>

    </main>
  )
}

export default App;
