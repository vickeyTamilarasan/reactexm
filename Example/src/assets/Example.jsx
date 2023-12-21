import React, { useReducer } from 'react'

function Reduce(state, action) {
  switch (action.type) {
    case "*":
      return { num: state.num * 2 }
    case "/":
      return { num: state.num / 2 }

    default:
      return Error('Invalit value')

  }
}
export default function Example() {
  const [state, dispatch] = useReducer(Reduce, { num: 10 })
  return (
    <div>
      <h1>
        {state.num}
      </h1>

      <button onClick={() => dispatch({ type: '*' })}>*</button>
      <button onClick={() => dispatch({ type: '/' })}>/</button>
    </div>
  )
}
