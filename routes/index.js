const express = require('express');
const router = express.Router();

const cabRouter = require('./cabs');
const bookingRouter = require('./bookings');
const authRouter = require('./auth');

router.use('/auth', authRouter)
router.use('/booking', bookingRouter);
router.use('/cab', cabRouter);

module.exports = router;

