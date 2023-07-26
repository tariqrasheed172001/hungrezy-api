const {sendOTP} = require('../otpGenerator');
require('dotenv').config();

const TwilioOtp = (req,res) =>{
    const { phoneNumber } = req.body;
  
    if (!phoneNumber) {
      return res.status(400).json({ error: 'Phone number and message are required.' });
    }
  
    const otp = sendOTP(phoneNumber, "Verification from Hungrezy");
    res.json({ message: 'OTP sent successfully.', otp });
}

module.exports = {TwilioOtp};