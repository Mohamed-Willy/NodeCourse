const express = require('express');
const tourConroller = require('./../Controllers/TourController');
const router = express.Router();

router.param('id', (req, res, next, val) => {
  console.log('Tour ID: ', val);
  tourConroller.checkID(req, res, next, val);
});
router
  .route('/')
  .get(tourConroller.getAllTours)
  .post(tourConroller.checkBody, tourConroller.addTour);
router
  .route('/:id')
  .get(tourConroller.getOneTour)
  .patch(tourConroller.updateTour)
  .delete(tourConroller.deleteTour);

module.exports = router;
