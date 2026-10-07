import React from 'react'
import { useState } from 'react'
import  "../style/form.scss"
import { Link } from 'react-router-dom';
import axios from 'axios';
const Register = () => {
 
    const [username, setUsername] = useState('');
    const [bio, setBio] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        
        
    }
  return (
    <div className="authdiv">
       
      <form action="/register" className="authForm" onSubmit={handleSubmit}>
        <h1>Register</h1>
        <input type="text"
         name="username" 
         placeholder="Enter your Username"
         onChange={(e) => setUsername(e.target.value)} />
        <input type="text" name="bio" placeholder="Enter your Bio" onChange={(e) => setBio(e.target.value)} />
        <input type="email" name="email" placeholder="Enter your Email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" name="password" placeholder="Enter your Password" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Register</button>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </form>
    </div>
  )
}

export default Register