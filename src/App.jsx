import { useState } from 'react'
import { nanoid } from 'nanoid'
import './App.css'

const DUMMY_TODOS = [
  {
    i:nanoid(),
    title:'Belajar React',
    isCompleted:false
  }
]

function App() {
  // const [count, setCount] = useState(0)

  const [newTodo, setNewTodos] = useState('')
  const [todos, setTodos] = useState(DUMMY_TODOS)

  function addNewTodo(){
    const updatedTodo = [...todos]
    const objTodo = {
      id: nanoid(),
      title: newTodo,
      isCompleted:false
    }
    console.log(objTodo)
    updatedTodo.push(objTodo)
    setTodos(updatedTodo)
    setNewTodos([])
  }

  return (
    <>
    <h1>Coding seru</h1>
    <input type='text' placeholder='Isi' value={newTodo} onChange={event => (setNewTodos(event.target.value))} />
    <button onClick={() => addNewTodo()}>Create</button>
    <ul>
      {
        todos.map((todo) => (
          <li 
          key={todo.id} className='todo-item'> 
            <input type='checkbox' /> 
            {todo.title}
          </li>
        ))
      }
    </ul>

    </>
  )
}

export default App
