const express = require('express');
const tourConroller = require('../Controllers/tourController');

const router = express.Router();

router.route('/monthly-plan/:year').get(tourConroller.getMonthlyPlan);
router.route('/tour-stats').get(tourConroller.getTourStats);
router.route('/').get(tourConroller.getAllTours).post(tourConroller.createTour);
router
  .route('/:id')
  .get(tourConroller.getOneTour)
  .patch(tourConroller.updateTour)
  .delete(tourConroller.deleteTour);
module.exports = router;
