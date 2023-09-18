import React, { useState } from 'react';
import './App.css';

function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Function to handle deleting a todo
  const deleteToDo = (id) => {
    setToDos(toDos.filter((todo) => todo.id !== id));
  };

  // Function to handle adding a todo
  const addTodo = () => {
    if (toDo.trim() !== '') {
      setToDos([
        ...toDos,
        { id: Date.now(), text: toDo, status: false, timestamp: new Date() },
      ]);
      setToDo(''); // Clear the input text
      setErrorMessage(''); // Clear the error message
    } else {
      setErrorMessage('Please enter a todo item.'); // Set the error message
    }
  };

  // Function to handle checking/unchecking a todo
  const toggleTodo = (id) => {
    setToDos(
      toDos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, status: !todo.status };
        }
        return todo;
      })
    );
  };
  
 
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i onClick={addTodo} className="fas fa-plus"></i>
      </div>

      {errorMessage && <div className="error">{errorMessage}</div>} {/* Display the error message */}

      <div className="todos">
        {toDos.map((obj) => (
          <div className={obj.status ? 'todo crossed' : 'todo'} key={obj.id}>
            <div className="left">
              <input
                onChange={() => toggleTodo(obj.id)}
                checked={obj.status}
                type="checkbox"
                name=""
                id=""
              />
              <p>{obj.text} </p>

              <div className="timestamp">{obj.timestamp.toLocaleString()}</div>
            </div>
            <div className="right">
              <i onClick={() => deleteToDo(obj.id)} className="fas fa-times"></i>
            </div>
          </div>
        ))}
        {toDos
          .filter((obj) => obj.status)
          .map((obj) => (
            <h1 key={obj.id}>{obj.text}</h1>
          ))}
      </div>
    </div>
  );
}

export default App;
