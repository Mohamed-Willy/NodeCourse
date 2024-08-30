const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });

// console.log(process.env);
app.listen(process.env.PORT, () => {
  console.log('listening on port ', process.env.PORT, '...');
});
