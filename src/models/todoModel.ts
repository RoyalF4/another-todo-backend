import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    trim: true,
    required: [true, 'A todo must have a title'],
  },
  description: {
    type: String,
    trim: true,
    default: 'Not available',
  },
  created: {
    type: Date,
    default: Date.now(),
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'],
  },
  status: {
    type: String,
    enum: ['pending', 'in progress', 'completed'],
  },
});

const Todo = mongoose.model('Todo', todoSchema);

export default Todo;
