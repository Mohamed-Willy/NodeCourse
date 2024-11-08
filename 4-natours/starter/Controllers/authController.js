const User = require('../Models/userModel');
const CatchAsync = require('../Utils/catch-async');

exports.signup = CatchAsync(async (req, res, next) => {
  const newUser = await User.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      user: newUser,
    },
  });
});
