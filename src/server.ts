import dotenv from 'dotenv/config';
import express from 'express';
import { app } from './app';

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
