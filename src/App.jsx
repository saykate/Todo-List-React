import { useState } from 'react';
import TodoList from "./todoList"
import Container from './container';
import InputForm from './form'

function App() {
  const [todos, setTodos] = useState([]);

  function handleDelete(id) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
}   

  return (<>
    <Container>
      <InputForm setTodos={setTodos}/>
      <TodoList todos={todos} handleDelete={handleDelete} />
    </Container>
    </> )
}

export default App
