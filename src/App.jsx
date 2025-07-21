import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'  
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Movies from './pages/Movies'


const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/movies/:id" element={<Movies />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App