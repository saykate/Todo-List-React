import Button from "./buttons";

function TodoItem({ todo, handleDelete }) {
        
        return (
            <li className="todo-item" key={todo.id}>{todo.task}
            <Button className="delete" onClick={() => handleDelete(todo.id)} text="X"/></li>
        ) 
}

export default TodoItem