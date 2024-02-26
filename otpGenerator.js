require("dotenv").config();
// Function to generate a random OTP
function generateOTP(length = 4) {
  const digits = "0123456789";
  let OTP = "";
  for (let i = 0; i < length; i++) {
    OTP += digits[Math.floor(Math.random() * digits.length)];
  }
  return OTP;
}

module.exports = {
  generateOTP,
};
