import { Router } from 'express';
import {
  getAllTodos,
  createTodo,
  getTodo,
  deleteTodo,
  updateTodo,
} from '../controllers/todoController';

const router = Router();

router.route('/').get(getAllTodos).post(createTodo);

router.route('/:id').get(getTodo).delete(deleteTodo).patch(updateTodo);

export default router;
