// Registration.js
import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from "react-router-dom";
const Registration = () => {
  const [name, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
let navi =useNavigate()
  const handleRegister = async () => {
    try {
      await axios.post('http://localhost:4000/contact', { name:name, password:password });
      alert('Registration successful');
      navi('/login')
    } catch (error) {
      alert('Error registering user');
    }
  };

  return (
    <div>
      <h2>Registration</h2>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Registration;
