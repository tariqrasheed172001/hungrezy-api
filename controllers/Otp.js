const {TwilioOtp} = require('../service/Otp');

const sendOtp = (req,res) =>{
    TwilioOtp(req,res);
}

module.exports = {sendOtp};