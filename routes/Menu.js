const express = require('express');
const router = express.Router();

const {GetMenu,PostMenu} = require('../controllers/Menu');

router.get('/menu',GetMenu);

router.post('/menu',PostMenu);


module.exports = router;