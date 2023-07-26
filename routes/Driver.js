const express = require('express');
const router = express.Router();

const {GetDriver,PostDriver} = require('../controllers/Driver');

router.get('/drivers',GetDriver);

router.post('/drivers',PostDriver);


module.exports = router;