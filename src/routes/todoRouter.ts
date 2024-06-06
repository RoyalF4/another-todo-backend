import { Router } from 'express';
import { getAllTodos } from '../controllers/todoController';

const router = Router();

router.get('/', getAllTodos);

export default router;
