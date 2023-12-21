import React, { useEffect, useState } from 'react'

export default function Effect() {
    const[num,setNum]=useState(0);
    const add=()=>{
        setNum(num+1);
    }
    useEffect(()=>{
        console.log("hai");
        document.title=`Components rendered count:${num}`
        fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
    },[])
  return (
    <div>
        <h1>useeffect  </h1>
        <h3>
            {num}
        </h3>
        <button onClick={add}>Add</button>
    </div>
  )
}
