import { useState } from 'react';
import Button from './buttons';
import { v4 as uuidv4 } from 'uuid';

export default function InputForm({ setTodos }) {
    const [todoInput, setTodoInput] = useState("");

    function handleAddTodoClick(e) {
        e.preventDefault();
       if(!todoInput) {
        alert("Please add text for Todo");
        return
       } 
       const newTodo = { task: todoInput, id: uuidv4() };
       setTodos((prevTodos) => [...prevTodos, newTodo]);
       setTodoInput(""); 
    }
 
    return (
    <div className="form">
        <form>
        <label htmlFor="todo-input">Enter Todo here:</label>
        <input
            id='todo-input'
            placeholder="todo"
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}
        />
        </form>
        <Button onClick={handleAddTodoClick} text="Add Todo!" />
    </div>)
}