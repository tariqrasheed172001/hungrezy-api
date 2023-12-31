const {
  QueryAllUsers,
  QueryLogin,
  QueryRegister,
  doesEmailExist,
  generateResetPasswordLink,
  verifyResetPasswordLink,
  updatePassword,
} = require("../service/Users");

const GetAllUsers = (req, res) => {
  QueryAllUsers(req, res);
};

const Login = (req, res) => {
  QueryLogin(req, res);
};

const Register = (req, res) => {
  QueryRegister(req, res);
};

const GenerateResetPasswordLink = (req, res) => {
    generateResetPasswordLink(req, res);
};
const VerifyResetPasswordLink = (req, res) => {
    verifyResetPasswordLink(req, res);
};

const UpdatePassword = (req, res) => {
  updatePassword(req, res);
};

const CheckExistingEmail = async (req, res) => {
  try {
    const result = await doesEmailExist(req, res);
    if (result) {
      return res.status(409).json({ message: "Email already exists" });
    } else {
      return res.status(200).json({ message: "Email does not exist" });
    }
  } catch (error) {
    console.error("Error checking email existence:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  GetAllUsers,
  Login,
  Register,
  CheckExistingEmail,
  GenerateResetPasswordLink,
  VerifyResetPasswordLink,
  UpdatePassword,
};
