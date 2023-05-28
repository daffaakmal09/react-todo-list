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
  const [error, setError] = useState('')

  function addNewTodo(){
    if (newTodo.length === 0 ) {
      setError('data kosong')
    }else{
      const updatedTodo = [...todos]
      const objTodo = {
        id: nanoid(),
        title: newTodo,
        isCompleted:false
      }
      updatedTodo.push(objTodo)
      setTodos(updatedTodo)
      setNewTodos([])
    }
    // console.log(objTodo)
  }

  function completeTodo(targetTodo){
    const updatedTodos = todos.map(todo => {
      if (todo.id === targetTodo){
        todo.isCompleted = !todo.isCompleted
      }
      return todo
    })

    setTodos(updatedTodos)
    console.log(updatedTodos)
  }

  function handleChange(event) {
    setNewTodos(event.target.value)
    setError('')
  }

  return (
    <>
    <h1>Coding seru</h1>
    <input type='text' placeholder='Isi' value={newTodo} onChange={event => (handleChange(event))} />
    
    <button onClick={() => addNewTodo()}>Create</button>
    {
      error.length > 0 ? (
        <p style={{color: 'red'}}>{error}</p>
      ) : null
    }
    <ul>
      {
        todos.map((todo) => (
          <li key={todo.id} className='todo-item' style={{textDecoration: todo.isCompleted ? 'line-through' : 'none'}}> 
            <p>
              <input type='checkbox' onChange={() => completeTodo(todo.id)}/> 
              {todo.title}
            
            <button style={{ marginLeft: '16px', backgroundColor: 'red'}}>x</button></p>
          </li>
        ))
      }
    </ul>

    </>
  )
}

export default App
