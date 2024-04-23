const express = require('express');
const { register, login } = require('./userController');
const userRouter = express.Router();

userRouter.route('/register')
    .post(register)
userRouter.route('/login')
    .post(login)
module.exports = userRouter;