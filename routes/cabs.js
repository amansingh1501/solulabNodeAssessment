const express = require('express');
const router = express.Router();

const cabController = require('../controllers/cabs');

router.post('/create', cabController.createCab);
router.post('/updateLocation/:id', cabController.updateLocation);
router.post('/getCabs', cabController.getCabByLocation);
module.exports = router;

