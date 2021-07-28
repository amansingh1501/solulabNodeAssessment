const express = require('express');
const router = express.Router();

const bookingController = require('../controllers/bookings');
/**routes related to bookings by user */
router.get('/bookings', bookingController.getBookingsForUser);
router.post('/booking', bookingController.createBooking);
router.get('/update/:id', bookingController.completeTrip)

module.exports = router;

