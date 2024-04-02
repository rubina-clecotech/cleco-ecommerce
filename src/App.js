import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import HomePage from './components/screens/HomePage'
import CheckoutPage from './components/screens/CheckoutPage'
import ProductListingPage from './components/screens/ProductListingPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/checkout' element={<CheckoutPage/>}/>
        <Route path='product-list' element={<ProductListingPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

