const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
require('dotenv').config();
// Function to generate a random OTP
function generateOTP(length = 4) {
  const digits = '0123456789';
  let OTP = '';
  for (let i = 0; i < length; i++) {
    OTP += digits[Math.floor(Math.random() * digits.length)];
  }
  return OTP;
}

// Function to send OTP via Twilio SMS
function sendOTP(phoneNumber, message) {
  const otp = generateOTP();
  client.messages.create({
    to: phoneNumber,
    from: process.env.TWILIO_PHONE_NUMBER,
    body: `${message} Your OTP is: ${otp}`
  })
  .then((message) => {
    console.log("OTP sent with SID:", message.sid);
  })
  .catch((error) => {
    console.error("Error sending OTP:", error);
  });

  return otp; // Return the generated OTP for further processing
}

module.exports = {
  generateOTP,
  sendOTP
};
