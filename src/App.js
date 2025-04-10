import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Pos from './pages/Pos/Pos';

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
                <Home/>
            }
          />
          <Route
            path="/pos"
            element={
                <Pos/>
            }
          />
        </Routes>
      </BrowserRouter>

  )
}

export default App
