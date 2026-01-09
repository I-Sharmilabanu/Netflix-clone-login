import { useState } from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import MovieCard from './components/MovieCard'

function App() {


  return (
    <BrowserRouter>
    
    <Navbar/>
    <Routes>
      
      <Route path="/" element={<Home/>}></Route>
       <Route path="/login" element={<Login/>} />
       <Route path="/dashboard" element={<Dashboard/>}/>
       <Route path='moviecard' element={<MovieCard/>}/>
       

      </Routes></BrowserRouter>
  )
}

export default App 