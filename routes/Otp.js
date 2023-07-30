const express = require('express');
const router = express.Router();

const {sendOtp} = require('../controllers/Otp');

router.post('/send-otp', sendOtp);


module.exports = router;