import { Response, Request } from 'express';

export const getAllTodos = (req: Request, res: Response) => {
  res.status(200).send('getAllTodos');
};
