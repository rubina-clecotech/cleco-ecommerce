import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import HomePage from './components/screens/HomePage'
import CheckoutPage from './components/screens/CheckoutPage'
import UpperNav from './components/layout/UpperNav'
import Navbar from './components/layout/Navbar'

const App = () => {
  return (
    <BrowserRouter>
      <UpperNav/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/checkout' element={<CheckoutPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

