const express = require('express');
const router = express.Router();

const messagesController = require('../controllers/messages');

router.get('/messages', messagesController.index)

module.exports = router
