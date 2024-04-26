const express = require('express');
const router = express.Router();
const userController = require('../controllers/userDetailsPut');

router.put('/:userId', userController.updateUser);

module.exports = router;
