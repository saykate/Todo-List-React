import TodoList from "./components/todoList";
import Container from "./components/container";
import InputForm from "./components/inputForm";

function App() {

  return (
    <>
      <Container>
        <InputForm  />
        <TodoList />
      </Container>
    </>
  );
}

export default App;
