const express = require('express');
const router = express.Router();

const cabRouter = require('./cabs');
const bookingRouter = require('./bookings');
const authRouter = require('./auth');
const {checkIsLoggedIn} = require('../middlewares/auth');

router.use('/auth', authRouter)
router.use('/booking',checkIsLoggedIn, bookingRouter);
router.use('/cab', checkIsLoggedIn,cabRouter);

module.exports = router;

