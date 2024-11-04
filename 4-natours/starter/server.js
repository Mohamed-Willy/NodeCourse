const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

process.on('uncaughtException', (err) => {
  console.error(`UNCAUGHT EXCEPTION: ${err.name}, ${err.message}`);
  console.error(`Shutting down...`);
  process.exit(1);
});

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);
mongoose.connect(DB).then(() => console.log('Connected to MongoDB...'));

const server = app.listen(process.env.PORT, () => {
  console.log('listening on port ', process.env.PORT, '...');
});

process.on('unhandledRejection', (err) => {
  console.error(`${err.name}, ${err.message}`);
  console.error(`Shutting down...`);
  server.close(() => {
    process.exit(1);
  });
});
