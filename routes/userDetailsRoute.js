const express = require('express');
const router = express.Router();
const userController = require('../controllers/userDetailsPost');

router.post('/', userController.createUser);

module.exports = router;
