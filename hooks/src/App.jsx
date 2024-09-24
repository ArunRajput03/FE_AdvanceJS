import { useState } from 'react'

function App() {
  const [counter, setCounter] = useState(0)

  const incrementCounter=()=> {
    setCounter((oldCounter)=> {
      return oldCounter+1
    })
    setCounter((oldCounter)=> {
      return oldCounter+1
    })
    setCounter((oldCounter)=> {
      return oldCounter+1
    })
  }

  const decrementCounter=()=> {
    setCounter((oldCounter)=> {
      return oldCounter-1
    })
  }

  return (
    <>
      <h1>Counter</h1>
      <button onClick={incrementCounter} name="btnIncrement">+</button>
      {counter}
      <button onClick={decrementCounter} name="btnDecrement">-</button>
    </>
  )
}

export default App
 