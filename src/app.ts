import express from 'express';
import todoRouter from './routes/todoRouter';

export const app = express();

app.use('/api/todos', todoRouter);
