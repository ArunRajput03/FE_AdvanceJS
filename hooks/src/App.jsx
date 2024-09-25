import React, { useState } from 'react'
import Child from './components/child'
import NewComponent from './components/Fragment'

function App() {
  const [counter, setCounter] = useState(0)
  const [itemAry, setItemAry]= useState(['Apple','Mango','Orange','Grapes'])

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
      <br/>
      <Child/>
      <br/>
      <h1>React.Fragment: {"<></>"} Empty Element</h1>
      {
        itemAry.map(item=> {
          return (
            <React.Fragment key={item}>
              <NewComponent/>
              <p>{item}</p>
            </React.Fragment>
          )
        })
      }
      
    </>
  )
}

export default App
 