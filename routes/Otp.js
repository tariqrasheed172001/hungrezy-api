const express = require('express');
const router = express.Router();

const {sendOtp,Send_Restaurant_Contact_Otp,Send_Owner_Email_Otp,Send_Owner_Phone_Otp} = require('../controllers/Otp');

router.post('/send-otp', sendOtp);
router.post('/send-restaurant-contact-otp',Send_Restaurant_Contact_Otp);
router.post('/send-owner-email-otp',Send_Owner_Email_Otp);
router.post('/send-owner-phone-otp',Send_Owner_Phone_Otp);


module.exports = router;