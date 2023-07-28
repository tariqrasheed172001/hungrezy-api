const express = require('express');
const router = express.Router();

const {GetAllUsers,Login,Register,CheckExistingEmail,GenerateResetPasswordLink,VerifyResetPasswordLink,UpdatePassword} = require('../controllers/Users');

router.post('/register',Register);

router.post('/login',Login);

router.get('/users',GetAllUsers);

router.post('/checkExistingEmail',CheckExistingEmail);

router.post('/reset-password',GenerateResetPasswordLink);

router.get('/reset-password/:user_id/:token',VerifyResetPasswordLink)

router.post('/update-password/:user_id/:token',UpdatePassword)



module.exports = router;