import { Schema, model } from "mongoose";

const todoSchema = new Schema({
 task: String, 
 id: String, 
 complete: {
  type: Boolean,
  default: false,
}
})

const TodoSchema = model('TodoSchema', todoSchema);
export default TodoSchema