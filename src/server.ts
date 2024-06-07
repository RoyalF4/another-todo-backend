import 'dotenv/config';
import mongoose from 'mongoose';
import { app } from './app';

// connect to db
const dbUrl = process.env.DATABASE;
const dbPassword = process.env.DATABASE_PASSWORD;

if (!dbUrl || !dbPassword) {
  throw new Error(
    'DATABASE AND DATABASE_PASSWORD environment variables are required'
  );
}
const DB = dbUrl.replace('<password>', dbPassword);
mongoose.connect(DB, {}).then(() => {
  console.log('DB connection successful!');
});

// get port
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
