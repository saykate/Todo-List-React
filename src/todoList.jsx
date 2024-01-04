import TodoItem from "./todoItem"

function TodoList({ todos, handleDelete }) {
    return (
        <ul className="list">
            {
                todos.map(todo => {
                    return <TodoItem key={todo.id} todo={todo} handleDelete={handleDelete} />
                })
            }
        </ul>
    )
}

export default TodoList