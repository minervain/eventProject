import React from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/categoryPage/home'
import Favorites from './pages/Favorites'
import Detail from './pages/detail'
import Resim from './pages/categoryPage/resim'
import Tiyatro from './pages/categoryPage/tiyatro'
import Konser from './pages/categoryPage/konser'
import Diger from './pages/categoryPage/diger'


function App() {
  return (
    <div className='Content' >

      <Navbar />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/Favorites' element={<Favorites />} />
        <Route path='/resim' element={<Resim />} />

        <Route path='/tiyatro' element={<Tiyatro />} />
        <Route path='/diger' element={<Diger />} />


        <Route path='/konser' element={<Konser />} />


      </Routes>
      <Footer />

    </div>
  )
}

export default App