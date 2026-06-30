import { useState } from "react";

function App() {
  return (
    <div className="App">
      <h2>TODO App</h2>
    </div>
  );
}
export default App;
importREact, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import './App.css';
function App() {
  const [todos, setTodos] = useState([
    'Create New Bank Account',
    'Read on Web Development',
    'Rest'
  ]);
  const [input, setInput] = useState('');
  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, input]);
    setInput('')
  };

  return (
    <div>
      <h2>TODO App</h2>
      <form>
        <TextField id="outlined-basic" label="Make Todo" variant="outlined" style={{ margin: "0px 5px" }} size="small" value={input} onChange={e => setInput(e.target.value)} />
        <button variant="contained" color="primary" onClick={addTodo} >Add Todo</button>
      </form>
      <ul>
        {todos.map(todo => <li></li>)}
      </ul>
    </div>
  );
};
export default App;