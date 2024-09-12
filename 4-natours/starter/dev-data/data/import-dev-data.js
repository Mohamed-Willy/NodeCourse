const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Tour = require('../../Models/tourModel');

dotenv.config({ path: '../../config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);
mongoose.connect(DB).then(() => console.log('Connected to MongoDB...'));

const tours = JSON.parse(fs.readFileSync('tours-simple.json', 'utf-8'));

const importData = async () => {
  try {
    await Tour.create(tours);
    console.log('Data imported successfully!');
    process.exit();
  } catch (err) {
    console.error('Error importing data:', err);
  }
};

// Clear the DB before importing anything
const deleteData = async () => {
  try {
    await Tour.deleteMany();
    console.log('Data deleted successfully!');
    process.exit();
  } catch (err) {
    console.error('Error importing data:', err);
  }
};

process.argv.forEach((arg) => {
  if (arg === '--deleteData') {
    deleteData();
  }
  if (arg === '--importData') {
    importData();
  }
});
