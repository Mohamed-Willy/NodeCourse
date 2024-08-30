const express = require('express');
const {
  getAllUsers,
  addUser,
  getOneUser,
  updateUser,
  deleteUser,
} = require('./../Controllers/userController');

const router = express.Router();

router.route('/').get(getAllUsers).post(addUser);
router.route('/:id').get(getOneUser).patch(updateUser).delete(deleteUser);

module.exports = router;
