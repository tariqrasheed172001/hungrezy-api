const express = require('express');
const router = express.Router();

const {GetAllUsers,Login,Register,Verification,Logout,CheckExistingEmail} = require('../controllers/Users');

const {verifyUser} = require('../Middleware/User');




router.get('/',verifyUser,Verification);

router.post('/register',Register);

router.post('/login',Login);

router.get('/logout',Logout);

router.get('/users',GetAllUsers);

router.post('/checkExistingEmail',CheckExistingEmail);



module.exports = router;