import React from 'react'

import Home from './Home'
import Dashboard from './Dashboard'
import Footer from './Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Home />

      <Routes>
        <Route Route   path='/home' element={<Dashboard/>} ></Route>
      </Routes>

      <Footer />
    </Router>


  )
}

export default App
