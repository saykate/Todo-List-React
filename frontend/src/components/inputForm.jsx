import { useState } from "react";
import Button from "./Buttons";
import { v4 as uuidv4 } from "uuid";
import axios from 'axios';

export default function InputForm({ }) {
  const [todoInput, setTodoInput] = useState("");

  function handleAddTodoClick(e) {
    e.preventDefault();
    if (!todoInput) {
      alert("Please add text for Todo");
      return;
    }

    axios.post('http://localhost:3001/add', { task: todoInput, id: uuidv4() })
    .then(result => {
      location.reload()
    })
    .catch(error => console.error(error))
  }

  return (
    <div className="form">
      <form>
        <label htmlFor="todo-input">Enter Todo here:</label>
        <input
          id="todo-input"
          placeholder="todo"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
        />
      </form>
      <Button onClick={handleAddTodoClick} text="Add Todo!" />
    </div>
  );
}
