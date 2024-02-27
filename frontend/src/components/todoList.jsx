import { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import axios from "axios";

function TodoList({ }) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/get')
    .then(result => setTodos(result.data))
    .catch(error => console.error(error))
  }, [])

  return (
    <ul className="list">
      {
      todos.length === 0 
      ?
      <h2>You're all caught up!</h2> 
      :
      todos.map((todo) => {
        return (
          <TodoItem key={todo.id} todo={todo} />
        );
      })}
    </ul>
  );
}

export default TodoList;
