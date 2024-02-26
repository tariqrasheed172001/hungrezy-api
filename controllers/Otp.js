const { SendOtp, send_owner_email_otp } = require("../service/Otp");

const sendOtp = (req, res) => {
  SendOtp(req, res);
};

const Send_Owner_Email_Otp = (req, res) => {
  send_owner_email_otp(req, res);
};

module.exports = { sendOtp, Send_Owner_Email_Otp };
