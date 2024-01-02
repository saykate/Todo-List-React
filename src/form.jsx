import { useState } from 'react';
import Button from './buttons';
import { v4 as uuidv4 } from 'uuid';

export default function InputForm({ setTodos, className }) {
    const [todoInput, setTodoInput] = useState("");

    function handleAddTodoClick() {
       if(todoInput) {
       const newTodo = { task: todoInput, id: uuidv4() };
       setTodos((prevTodos) => [...prevTodos, newTodo]);
       setTodoInput(""); 
       } else {
        alert("Please add text for Todo")
       }
    }
 
    return (
    <div className={className}>
        <label htmlFor="todo-input">Enter Todo here:</label>
        <form onSubmit={e => e.preventDefault()}>
        <input
            placeholder="todo"
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}
        />
        </form>
        <Button onClick={handleAddTodoClick} text="Add Todo!" />
    </div>)
}