const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const nodemailer = require("nodemailer");

const { User } = require("../models/User");

const QueryAllUsers = async (req, res) => {
  // ORM---->
  try {
    const userss = await User.findAll(); // Perform the SELECT * FROM users query
    // Send the users as a JSON response
    res.json(userss);
  } catch (error) {
    console.error("Error fetching all users:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const QueryLogin = async (req, res) => {
  // ---> ORM

  const { email, passwordd } = req.body;

  try {
    const user = await User.findOne({ where: { email } });

    // console.log(user.name);
    if (!user || !user.passwordd) {
      return res.status(401).json({ message: "Wrong email or password" });
    }

    const isMatch = await bcrypt.compare(passwordd, user.passwordd);

    if (isMatch) {
      console.log("Password matched! User can log in.");

      // jwt token
      const name = user.name;

      console.log(name);
      const token = jwt.sign({ name }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });
      console.log(token);
      // res.cookie('token', token);

      return res
        .status(200)
        .json({ token, user, message: "Successfully logged in" });
    } else {
      console.log("Incorrect password. User cannot log in.");
      return res.status(201).json({ user, message: "Wrong email or password" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const QueryRegister = async (req, res) => {
  // ---> ORM

  const data = req.body;

  try {
    const result = await User.create(data);
    res.send({ result, message: "You have successfully signed up" });
  } catch (error) {
    console.error("Error creating user", error);
    res.status(500).json({ message: "Internval server error" });
  }
};

const doesEmailExist = async (req, res) => {
  const email = req.body.email;
  try {
    const existingUser = await User.findOne({ where: { email } });
    return !!existingUser;
  } catch (error) {
    // Handle any errors that occurred during the database query.
    console.error("Error checking email existence:", error);
    return false; // You can choose to handle this differently based on your use case.
  }
};

const generateResetPasswordLink = async (req, res) => {
  const { email } = req.body;

  try {
    const oldUser = await User.findOne({ where: { email } });
    if (!oldUser) {
      return res.status(401).json({ message: "Email does not exist" });
    }

    const secret = process.env.JWT_SECRET + oldUser.passwordd;

    const token = jwt.sign({ email: oldUser.email }, secret, {
      expiresIn: "5m",
    });

    const link = `http://localhost:3000/reset-password/${oldUser.user_id}/${token}`;
    console.log(link);
    res.json({ link: link });



var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'rasheedhadiq@gmail.com',
      pass: 'excyclmqkdgnajiq'
    }
  });
  
  var mailOptions = {
    from: 'rasheedhadiq@gmail.com',
    to: `${email}`,
    subject: 'Reset your Hungrezy password',
    text: `You say you forgot your password? Let's get you a new one
    Please click the link below to get a new password. ${link}`
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

  } catch (error) {
    console.error("Error during reseting password:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const verifyResetPasswordLink = async (req, res) => {
  const { user_id, token } = req.params;
  console.log(req.params);

  const oldUser = await User.findOne({ where: { user_id } });

  if (!oldUser) {
    return res.status(401).json({ message: "User not found!!" });
  }

  const secret = process.env.JWT_SECRET + oldUser.passwordd;

  try {
    const verify = jwt.verify(token, secret);
    return res.json("Verified");
  } catch (error) {
    return res.json("Not verified");
  }
};

const updatePassword = async (req, res) => {
  const { user_id, token } = req.params;

  const { newPassword } = req.body;
  console.log(newPassword);

  const oldUser = await User.findOne({ where: { user_id } });

  console.log(oldUser.passwordd);

  if (!oldUser) {
    return res.status(401).json({ message: "User not found!!" });
  }

  const secret = process.env.JWT_SECRET + oldUser.passwordd;

  try {
    const verify = jwt.verify(token, secret);

    //checking old password
    const isMatch = await bcrypt.compare(newPassword, oldUser.passwordd);
    if (isMatch) {
      return res.status(201).json({ message: "You entered the old password" });
    } else {
      // encrypting password
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(newPassword, saltRounds);

      // Update the password
      oldUser.passwordd = hashedPassword;
      await oldUser.save();

      console.log(oldUser.passwordd);

      return res.status(200).json({ message: "Password updated successfully" });
    }
  } catch (error) {
    return res
      .status(401)
      .json({ message: "error while updating the password" });
  }
};

module.exports = {
  QueryAllUsers,
  QueryLogin,
  QueryRegister,
  doesEmailExist,
  generateResetPasswordLink,
  verifyResetPasswordLink,
  updatePassword,
};
