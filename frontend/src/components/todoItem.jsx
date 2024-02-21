import Button from "./buttons";
import Circle from '../assets/circle-outline.svg'
import CircleFilled from '../assets/circle.svg'
import axios from "axios";

const handleEdit = (id) => {
  axios.put('http://localhost:3001/update/'+id)
    .then(result => {
      location.reload()
    })
    .catch(error => console.error(error))
}

const handleDelete = (id) => {
  axios.delete('http://localhost:3001/delete/'+id)
    .then(result => {
      location.reload()
    })
    .catch(error => console.error(error))
}

function TodoItem({ todo }) {
  return (
    <li className="todo-item">
      <div className="check-container" onClick={() => handleEdit(todo.id)}>
        {todo.complete 
        ? <img src={CircleFilled} alt="filled circle" className="circle" />
        : <img src={Circle} alt="circle outline" className="circle"/>
        }
        <p className={todo.complete ? 'line-through' : ""}>{todo.task}</p>
      </div>
      <Button
        className="delete"
        onClick={() => handleDelete(todo.id)}
        text="X"
      />
    </li>
  );
}

export default TodoItem;
