/* eslint-disable no-unused-vars */
import { useState } from 'react'


import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import Dashboard from './components/Dashboard'

function App() {


  return (
<div className='w-screen min-h-screen flex flex-col font-inter  bg-offblack'>
  <Navbar/>
<Routes>
<Route path="/" element={<Home/>}></Route>
<Route path="/dashboard" element={<Dashboard/>}></Route>
</Routes>
<Footer/>
</div>
  )
}

export default App
