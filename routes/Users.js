const express = require('express');
const router = express.Router();

const {GetAllUsers,Login,Register,CheckExistingEmail} = require('../controllers/Users');

router.post('/register',Register);

router.post('/login',Login);

router.get('/users',GetAllUsers);

router.post('/checkExistingEmail',CheckExistingEmail);



module.exports = router;