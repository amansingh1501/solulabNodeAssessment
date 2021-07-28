const express = require('express');
const router = express.Router();

const cabController = require('../controllers/cabs');
const {checkIsAdmin} = require('../middlewares/auth')
/** Routes related to cabs */
router.post('/create',checkIsAdmin, cabController.createCab);
router.post('/updateLocation/:id', cabController.updateLocation);
router.post('/getCabs', cabController.getCabByLocation);
module.exports = router;

