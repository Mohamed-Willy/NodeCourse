const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);
mongoose.connect(DB).then(() => console.log('Connected to MongoDB...'));

app.listen(process.env.PORT, () => {
  console.log('listening on port ', process.env.PORT, '...');
});
