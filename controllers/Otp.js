const { TwilioOtp,send_restaurant_contact_otp,send_owner_email_otp } = require("../service/Otp");

const sendOtp = (req, res) => {
  TwilioOtp(req, res);
};

const Send_Restaurant_Contact_Otp = (req,res) => {
  send_restaurant_contact_otp(req,res);
}

const Send_Owner_Email_Otp = (req,res) => {
  send_owner_email_otp(req,res);
}



module.exports = { sendOtp,Send_Restaurant_Contact_Otp,Send_Owner_Email_Otp };
