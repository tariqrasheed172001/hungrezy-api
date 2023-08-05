const { sendOTP, generateOTP } = require("../otpGenerator");
require("dotenv").config();
const nodemailer = require("nodemailer");

const send_otp_to_mail = (req,res,email,code) => {
  // sending code to user mail
  if (!email) {
    return res.status(400).json({ error: "Email is required." });
  }

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "rasheedhadiq@gmail.com",
      pass: "excyclmqkdgnajiq",
    },
  });

  var mailOptions = {
    from: "rasheedhadiq@gmail.com",
    to: `${email}`,
    subject: "Hungrezy verification code",
    text: `Your Hungrezy verification code is: ${code}. If you did not request this code, it is possible that someone else is trying to access your account. Do not forward or give this code to anyone` ,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.json({ message: "Error while send the code" });
    } else {
      console.log("Email sent: " + info.response);
      res.json({ code, message: "Code has been sent, check your inbox" });
    }
  });

}
const TwilioOtp = (req, res) => {
  // sending code to mobile number
  const { phoneNumber,email } = req.body;

  if (!phoneNumber) {
    return res
      .status(400)
      .json({ error: "Phone number and message are required." });
  }

  const code = generateOTP(6);

  const otp = sendOTP(phoneNumber, "Verification from Hungrezy", code);

   // sending same code to email
   send_otp_to_mail(req,res,email,code);
  
  // sending same code to front end.
  res.json({ message: "OTP sent successfully.", otp });
};

const send_restaurant_contact_otp = (req,res) => {
  const { phone } = req.body;

  if (!phone) {
    return res
      .status(400)
      .json({ error: "Phone number and message are required." });
  }

  const code = generateOTP(3);

  const otp = sendOTP(phone, "Verification from Hungrezy", code);

  res.json({ message: "OTP sent successfully.", otp });
}

const send_owner_email_otp = (req,res) => {
  const { email } = req.body;
  const otp = generateOTP(3);
  send_otp_to_mail(req,res,email,otp);
  res.json({ message: "Code sent successfully,check your inbox.", otp });
}

const send_owner_phone_otp = (req,res) => {
  const { phone } = req.body;

  if (!phone) {
    return res
      .status(400)
      .json({ error: "Phone number and message are required." });
  }

  const code = generateOTP(3);

  const otp = sendOTP(phone, "Verification from Hungrezy", code);

  res.json({ message: "OTP sent successfully.", otp });
}

module.exports = { TwilioOtp,send_restaurant_contact_otp,send_owner_email_otp,send_owner_phone_otp };
