import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './features/auth/pages/Login'
import Register from './features/auth/pages/Register'

const App = () => {
  return (
    <div>
      <Authcontextprovider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      </Authcontextprovider>
    </div>
  )
}

export default App