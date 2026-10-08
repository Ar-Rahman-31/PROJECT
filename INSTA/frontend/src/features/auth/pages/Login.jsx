import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import {useAuth} from '../hook/useAuth'
import { useNavigate } from 'react-router-dom';


const Login = () => {
  
  const {user , loading ,handleLogin}=useAuth()
    const [email, setEmail] =useState('');
    const [password, setPassword] =useState('');

     const navigate = useNavigate();
   

  async function handleSubmit(e) {
        e.preventDefault();

      await handleLogin(email,password)
      navigate('/')
     
    }
    if(!loading){
     return <main>
        <h1>Loadding...................</h1>
      </main>
    }
  return (
    <div className="authdiv">
       
        <form action="/login" className="authForm" onSubmit={handleSubmit}>
         <h1>Login</h1>
            <input type="email" name="email" placeholder="Enter your Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" name="password" placeholder="Enter your Password" onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Login</button>
            <p>Don't have an account? <Link to="/register">Register</Link></p>
        </form>
    </div>
  )
}

export default Login