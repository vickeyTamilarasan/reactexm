import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './views/Login.jsx'
import Registration from './views/Registraion.jsx'
import Update from './views/Update.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <BrowserRouter>
    <Routes>
      <Route element={<Registration />} path='/' />
      <Route element={<Login />} path='/login' />
      <Route element={<Update />} path='/update' />
    </Routes>
  </BrowserRouter>
)
