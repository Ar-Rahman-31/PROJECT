import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './features/auth/pages/Login'
import Register from './features/auth/pages/Register'
import Home from './features/post/pages/Home'
import { Authcontextprovider } from './features/auth/Auth.contex'

const App = () => {
  return (
    <div>
      <Authcontextprovider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
      </Routes>
      </Authcontextprovider>
    </div>
  )
}

export default App