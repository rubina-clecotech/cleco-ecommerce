<<<<<<< Updated upstream
import logo from './logo.svg';
import './App.css';
=======
import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import HomePage from './components/screens/HomePage'
import CheckoutPage from './components/screens/CheckoutPage'
>>>>>>> Stashed changes

function App() {
  return (
<<<<<<< Updated upstream
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
=======
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/checkout' element={<CheckoutPage/>}/>
      </Routes>
    </BrowserRouter>
  )
>>>>>>> Stashed changes
}

export default App;
