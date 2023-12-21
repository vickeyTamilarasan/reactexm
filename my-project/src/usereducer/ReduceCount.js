import React, { useReducer, useState } from 'react'


function Reduce(state,action)
{
    switch (action.type) {
        case "+":
            return {count:state.count+1}
        case "-":
            return {count:state.count-1}
        case "reset":
            return {count:0}
        default:
            throw Error("Invalid query!!")
        
    }
}
export default function ReduceCount() {
    const [num,setNum]=useState(0);

    const[state,dispatch]=useReducer(Reduce,{count:0})
  return (
    <div>
        <h1>{state.count}</h1>
        <button onClick={()=>dispatch({type:"+"})}>+</button>
        <button onClick={()=>dispatch({type:"-"})}>-</button>
        <button onClick={()=>dispatch({type:"reset"})}>reset</button>


    </div>
  )
}
