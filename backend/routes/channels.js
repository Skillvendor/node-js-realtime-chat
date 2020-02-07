const express = require('express');
const router = express.Router();

const channelsController = require('../controllers/channels');

router.get('/channels', channelsController.index)

module.exports = router
