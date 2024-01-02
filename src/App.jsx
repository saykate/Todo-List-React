import { useState } from 'react';
import TodoList from "./todoList"
import Container from './container';
import InputForm from './form'

function App() {
  const [todos, setTodos] = useState([]);

  return (<>
    <Container>
      <InputForm className="form" setTodos={setTodos}/>
      <TodoList className="list" todos={todos} />
    </Container>
    </> )
}

export default App
