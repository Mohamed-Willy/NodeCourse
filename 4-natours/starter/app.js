const fs = require('fs');
const express = require('express');

const app = express();

// Middleware configuration
app.use(express.json());

const port = 3000;
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);
/*
API Example:

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello from Willy', app: 'Natuors' });
});

app.post('/', (req, res) => {
  res.send('You can post to this endpoint ....');
});
*/

const getAllTours = (req, res) => {
  res.status(200).json(tours);
};
const getOneTour = (req, res) => {
  const tour = tours.find((el) => el.id === req.params.id * 1);
  if (!tour) return res.status(404).json({ message: 'Tour not found' });
  res.status(200).json(tour);
  // res.status(200).json(tours[req.params.id]);
};
const addTour = (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);
  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      if (err) console.log(err);
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour,
        },
      });
    }
  );
};
const updateTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Tour updated successfully',
    data: {
      tour: 'Later',
    },
  });
};
const deleteTour = (req, res) => {
  res.status(204).json({
    status: 'success',
    message: 'Tour deleted successfully',
    data: null,
  });
};

// app.get('/api/v1/tours', getAllTours);
// app.get('/api/v1/tours/:id', getOneTour);
// app.post('/api/v1/tours', addTour);
// app.patch('/api/v1/tours/:id', updateTour);
// app.delete('/api/v1/tours/:id', deleteTour);

app.route('/api/v1/tours').get(getAllTours).post(addTour);
app
  .route('/api/v1/tours/:id')
  .get(getOneTour)
  .patch(updateTour)
  .delete(deleteTour);

app.listen(port, () => {
  console.log('listening on port ' + port + '...');
});
