import { useState } from 'react'
import TodoList from '../component/TodoList'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <TodoList> </TodoList>

    </>
  )
}

export default App
