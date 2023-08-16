const express = require('express');
const router = express.Router();

const {sendOtp,Send_Restaurant_Contact_Otp,Send_Owner_Email_Otp} = require('../controllers/Otp');

router.post('/send-otp', sendOtp);
router.post('/verify-phone-number',Send_Restaurant_Contact_Otp);
router.post('/send-owner-email-otp',Send_Owner_Email_Otp);


module.exports = router;