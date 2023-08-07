import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/main'
import Support from './components/support';
import Feature from './components/feature';
import Member from './components/member';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/support' element={<Support />} />
        <Route path='/feature' element={<Feature />} />
        <Route path='/member' element={<Member />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App