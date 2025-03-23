import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './Home';
import Tasks from './Tasks';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FullPage from './FullPage';
import Header from './Header';
import Register from './Register';
import Login from './Login';


function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FullPage />}>
          <Route index element={<Register />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path='home' element={<Home />} />
          <Route path='login' element={<Login />} />



        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
