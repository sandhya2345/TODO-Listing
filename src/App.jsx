import { useState } from 'react';
import Navbar from './components/Navbar';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleEdit = () => {

  };

  const handleDelete = (e, id) => {
    console.log(`The id is ${id}`);
    let index = todos.findIndex(item => {
      return item.id === id;
    });
    console.log(index);
    let newTodos = todos.filter(item => {
      return item.id !== id;
    });

    setTodos(newTodos);
  };

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo("");
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => {
      return item.id === id;
    });

    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-6 rounded-xl bg-teal-50 p-8">
        <div className="addTodo">
          <h2 className="text-xl font-semibold">Add a Todo</h2>
          <input
            onChange={handleChange}
            value={todo}
            className="border w-1/2"
            type="text"
          />
          <button
            onClick={handleAdd}
            className="bg-cyan-800 hover:bg-blue-600 p-3 py-1 rounded-md mx-6 text-sm text-white"
          >
            Submit
          </button>
        </div>
        <h1 className="text-xl font-semibold">Your ToDo's List</h1>
        <div className="todos">
          {todos.length ===0 && <div className='my-3'>No Todos to display</div>}
          {todos.map((item) => {
            return (
              <div key={item.id} className="todo flex w-full justify-between my-3">
                <div className='flex '>
                <input className='mr-6'
                  name={item.id}
                  onChange={handleCheckbox}
                  type="checkbox"
                  checked={item.isCompleted}
                />
                <div className={item.isCompleted ? "line-through" : ""}>
                  {item.todo}
                </div>
                </div>
                <div className="buttons">
                  <button
                    onClick={handleEdit}
                    className="bg-cyan-800 hover:bg-blue-600 p-3 py-1 rounded-md mx-6 text-sm text-white"
                  >
                    Edit
                  </button>
                  <button
                    onClick={(e) => handleDelete(e, item.id)}
                    className="bg-cyan-800 hover:bg-blue-600 p-3 py-1 rounded-md mx-2 text-sm text-white"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;

