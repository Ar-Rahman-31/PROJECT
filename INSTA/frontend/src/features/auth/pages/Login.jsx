import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] =useState('');
    const [password, setPassword] =useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        axios.post('http://localhost:3000/api/auth/login', {
            email: email,
            password: password
        },{withCredentials: true})
        .then(response => {
            console.log(response.data);
        });
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