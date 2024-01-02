import TodoItem from "./todoItem"

function TodoList({ todos, className }) {
    return (
        <ul className={className}>
         <TodoItem todos={todos} />
        </ul>
    )
}

export default TodoList