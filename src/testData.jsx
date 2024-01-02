import { v4 as uuidv4 } from 'uuid';

const todos = [
    { task: "mow the lawn", id: uuidv4() },
    { task: "Work on Odin Projects", id: uuidv4() },
    { task: "feed the cat", id: uuidv4() },
]

export default todos;