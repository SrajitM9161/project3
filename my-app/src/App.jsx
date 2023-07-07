import React from 'react'
import './index.css'
import NavBar from './Components/NavBar'
import Roadmap from './Components/Roadmap'
import Videos from './Components/Videos'
import About from './Components/About'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
const App = () => {

  return (
   
    <>
<BrowserRouter>
<NavBar/>
<Routes>
   <Route  path="/" element={<Roadmap></Roadmap>}/>
   <Route  path="/roadmaps" element={<Roadmap></Roadmap>}/>
   <Route  path="/video" element={<Videos/>}/>
   <Route  path="/about" element={<About/>}/>
</Routes>
</BrowserRouter>

    </>
    
  )
}

export default App
