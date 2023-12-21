import React, { useEffect, useRef, useState } from 'react'

export default function UseRefHook() {
    const [name,setName]=useState("");

    const count=useRef(0);
    const previous=useRef()

    useEffect(()=>{
        count.current=count.current+1
        previous.current=name
    })
  return (
    <div>
        <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
        <h1>
            {name} <br />
            {count.current} <br />
            {previous.current}
        </h1>
    </div>
  )
}
