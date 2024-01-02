import Button from "./buttons";

function TodoItem({ todos, setTodos }) {
        
        function handleDelete() {
                setTodos((prevTodos) => prevTodos.filter((prev) => prev.id !== todo.id))
            }   

        return (
            todos.map((todo) => {
                 return <li className="todo-item" key={todo.id}>{todo.task}
                 <Button className="delete" onClick={handleDelete} text="X"/></li>
        })) 
  
}

export default TodoItem