const express = require('express');
const router = express.Router();

const bookingController = require('../controllers/bookings');

router.get('/bookings', bookingController.getBookings);
router.post('/booking', bookingController.createBooking);
router.post('/update/:id', bookingController.completeTrip)

module.exports = router;

