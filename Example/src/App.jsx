import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Example from './assets/Example'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Example/>
    </>
  )
}

export default App
