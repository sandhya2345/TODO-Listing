import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'


function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  

  const handleEdit = ()=> {

  }

  const handleDelete = ()=> {
    
  }

  const handleAdd = ()=> {
    setTodos([...todos, {todo, isCompleted: false}])
    setTodo("")
    
  }

  const handleChange = (e)=> {
    setTodo(e.target.value)
  }

  return (
    <>
    <Navbar/>
      <div className="container mx-auto my-6 rounded-xl bg-teal-50 p-8">

        <div className='addTodo'>
          <h2 className='text-xl font-semibold'>Add a Todo</h2>
          <input onChange={handleChange} value={todo} className='border w-1/2' type='text'></input>
          <button onClick={handleAdd} className='bg-cyan-800 hover:bg-blue-600 p-3 py-1 rounded-md mx-6 text-sm text-white'>Submit</button>

        </div>
        <h1 className='text-xl font-semibold'>Your ToDo's List</h1>
        <div className="todos">
          {todos.map(item=>{

          return <div key={todo} className="todo flex  w-full justify-between">
            <div className= {item.isCompleted?"":"line-through"}>{item.todo}</div>
            <div className="buttons">
              <button onClick={handleEdit}   className='bg-cyan-800 hover:bg-blue-600 p-3 py-1 rounded-md mx-6 text-sm text-white'>Edit</button>
              <button onClick={handleDelete} className='bg-cyan-800 hover:bg-blue-600 p-3 py-1 rounded-md mx-2 text-sm text-white'>Delete</button>
            </div>

          </div>
             })}
        </div>
    
      </div>
    </>
  )
}

export default App
