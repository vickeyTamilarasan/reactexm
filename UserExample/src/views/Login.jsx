// Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [name, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [company, setCompany] = useState('');
  const [jobtitle, setJobtitle] = useState('');
  const [dateofbirth, setDateofBirth] = useState('');
  const [id, setId] = useState('');
  let navi = useNavigate()

  const handleLogin = async () => {
    try {
      await axios.post('http://localhost:4000/login', { name, password }).then((s) => {
        console.log(s.data);
        setId(s.data._id);
        setUsername(s.data.name);
        setEmail(s.data.email);
        setPassword(s.data.password);
        setCompany(s.data.company);
        setJobtitle(s.data.jobtitle);
        setPhoneNo(s.data.phoneNo);
        setDateofBirth(s.data.dateofbirth);
        
      localStorage.setItem("_id", s.data._id);
      localStorage.setItem("name", s.data.name);
      localStorage.setItem("email", s.data.email);
      localStorage.setItem("password", s.data.password);
      localStorage.setItem("company", s.data.company);
      localStorage.setItem("jobtitle", s.data.jobtitle);
      localStorage.setItem("phoneNo", s.data.phoneNo);
      localStorage.setItem("dateofbirth", s.data.dateofbirth);
      });
      alert('Login successful');
      navi('/update');
    } catch (error) {
      alert('Invalid username or password');
    }
  };

  return (
    <div className='container'>
      <h2>Login</h2>
      <div className='d-block mt-3'>
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className='d-block mt-3'>
        <input
          className="form-control"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className='btn btn-primary w-50 mt-3' onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
