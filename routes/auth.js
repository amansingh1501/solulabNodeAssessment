const express = require('express');
const router = express.Router();

const authController = require('../controllers/auth');
/** Our auth routes */
router.post('/login', authController.loginUser);
router.post('/signup', authController.signupUser);

module.exports = router;

