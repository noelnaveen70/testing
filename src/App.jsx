import React from 'react'
import './App.css'
import Home from './components/Home'
import Navigationbar from './components/Navigationbar'
import { Route, Routes } from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'

const App = () => {
  return (
    <>
    <Navigationbar/>
   
    <Routes>
    
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/Register' element={<Register/>}></Route>
    </Routes>
    

    </>
  )
}

export default App