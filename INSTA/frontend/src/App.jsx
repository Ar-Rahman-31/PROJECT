import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './features/auth/pages/Login'
import Register from './features/auth/pages/Register'
import Home from './features/post/pages/Home'
import { Authcontextprovider } from './features/auth/Auth.contex'
import { PostContextProvider } from './features/post/PostContext'

const App = () => {
  return (
    <div>
      <Authcontextprovider>
        <PostContextProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
      </Routes>
      </PostContextProvider>
      </Authcontextprovider>
    </div>
  )
}

export default App