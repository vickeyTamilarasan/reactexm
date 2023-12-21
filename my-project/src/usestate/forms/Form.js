import React, { useState } from 'react'
import { FormUserList } from './FormUserList'

export default function Form() {

  const [name, setName] = useState("")
  const [number, setNumber] = useState("")
  function Reset(e) {
    e.preventDefault()
    console.log(name);
    e.target.Reset();
  }


  return (
    <div>
      <h1>
        {name}
        {number}
      </h1>
      <form >
        <input type='text' name='name' onChange={(e) => setName(e.target.value)} />
        <input type='text' name='number' onChange={(e) => setNumber(e.target.value)} /> 
        <button type='submit' onclick={Reset}>Send</button>
      </form>

      <FormUserList userName={name} userNumber={number} />
      {/* <FormUserList userName={name} userNumber = {number}/> */}


      {/* <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
        <input type='text' value={number} onChange={(e) => setNumber(e.target.value)} /> */}
    </div>
  )
}
