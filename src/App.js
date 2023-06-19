import React from 'react'
import Progressbar from './components/Progressbar'
import Slideshow from './components/Slideshow'
import AboutUs from './components/AboutUs';
import Docs from './components/Docs';
import Subgraph from './components/Subgraph';
import SubgraphQuery from './components/SubgraphQuery';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Slideshow />} />
        <Route path='/subgraphs' element={< Subgraph />} />
        <Route path='/aboutus' element={< AboutUs />} />
        <Route path='/docs' element={< Docs />} />
        <Route path='/create-subgraph' element={< Progressbar />} />
        <Route path='/query-subgraph' element={< SubgraphQuery />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
