import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginForm from '../usestate/forms/LoginForm'
import RegisterForm from '../usestate/forms/RegisterForm'
import Effect from '../useeffect/Effect'
import Create from '../crud/Create'
import Edit from '../crud/Edit'

export default function MainHome() {
  return (
    <div>
       <BrowserRouter>
          <Routes>
            
            <Route element={<LoginForm/>} path='/'/>
            <Route element={<RegisterForm/>} path='/registerForm'/>
            <Route path='/effect' element={<Effect></Effect>}/>
            <Route path='/create' element={<Create/>}/>
            <Route path='/edit' element={<Edit></Edit>}/>
          </Routes>
       </BrowserRouter> 
    </div>
  )
}
