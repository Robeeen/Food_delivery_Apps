import React from 'react'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/cart/Cart'
import PlaceOrder from './pages/placeOrder/PlaceOrder'
import { Home } from './pages/home/Home'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/order' element={ <Cart /> } />
        <Route path='/cart' element={ <PlaceOrder /> } />
      </Routes>
    </div>
  )
}

export default App