import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import TodoSchema from './model/Todo-Schema.js'
import 'dotenv/config'

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_CREDS)

app.get('/get', (req, res) => {
  TodoSchema.find()
  .then(result => res.json(result))
  .catch(error => res.json(error))
})

app.put('/update/:id', (req, res) => {
  const {id} = req.params;
  TodoSchema.findOneAndUpdate({ id: id }, { complete: true })
  .then(result => res.json(result))
  .catch(error => res.json(error))
})

app.delete('/delete/:id', (req, res) => {
  const {id} = req.params;
  TodoSchema.findOneAndDelete({ id: id })
  .then(result => res.json(result))
  .catch(error => res.json(error))
})

app.post('/add', (req, res) => {
  const todo = req.body.task;
  const id = req.body.id;
  TodoSchema.create({
    task: todo, 
    id: id,
  }).then(result => res.json(result))
  .catch(error => res.json(error))
})

app.listen(3001, () => {
  console.log("Server is Running")
})

