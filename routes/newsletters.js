const express = require('express');
// mores informations about router
const router = express.Router();

const newsletters = require('../controllers/newsletters');
router.post('/', newsletters.postSubscriber);

module.exports = router;