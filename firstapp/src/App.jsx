import { useState } from 'react'
import './styles/user.css'
import {Card, CardA} from './components/card'
import HandleArray from './components/HandleArray'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card name="A K" age="23" phone="998569526" address="123 Address"/>
      <br/>
      <CardA name="Babloo" age="25" phone="98547563" address="123 Address"/>
      <br/>
      <HandleArray/>
    </>
    )
}

export default App
