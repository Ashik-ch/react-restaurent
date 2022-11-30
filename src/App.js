import React from 'react'

import Home from './Home'
import Dashboard from './Dashboard'
import Footer from './Footer'
import RestaurentDetails from './RestaurentDetails'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Home />

      <Routes>
        <Route Route   path='/Home' element={<Dashboard/>} ></Route>
        <Route Route   path='/details/:id' element={<RestaurentDetails/>} ></Route>

      </Routes>

      <Footer />
    </Router>


  )
}

export default App
