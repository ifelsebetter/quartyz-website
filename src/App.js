import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/main'
import Support from './components/support';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/support' element={<Support />} />
      </Routes>
    </Router>
  )
}

export default App