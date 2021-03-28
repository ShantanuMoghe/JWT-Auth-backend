const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const infController = require('../controllers/login-controller');

router.post('/verify',infController.login);


module.exports= router;