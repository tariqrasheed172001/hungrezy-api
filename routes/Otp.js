const express = require("express");
const router = express.Router();

const { sendOtp, Send_Owner_Email_Otp } = require("../controllers/Otp");

router.post("/send-otp", sendOtp);
router.post("/send-owner-email-otp", Send_Owner_Email_Otp);

module.exports = router;
