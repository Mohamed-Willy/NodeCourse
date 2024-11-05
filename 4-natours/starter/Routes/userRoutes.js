const express = require('express');
const {
  getAllUsers,
  addUser,
  getOneUser,
  updateUser,
  deleteUser,
} = require('../Controllers/userController');
const authController = require('../Controllers/authController');

const router = express.Router();
router.post('/signup', authController.signup);
router.route('/').get(getAllUsers).post(addUser);
router.route('/:id').get(getOneUser).patch(updateUser).delete(deleteUser);

module.exports = router;
