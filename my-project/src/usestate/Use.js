import React,{useState} from 'react'

export default function Use() {
    let [name,setname]=useState(10);
    function ok()
    {
        setname("Hai")
    }
  return (
    <div>
        <h1>
            {name}
        </h1>
        <button onClick={ok}>Change</button>
    </div>
  )
}
