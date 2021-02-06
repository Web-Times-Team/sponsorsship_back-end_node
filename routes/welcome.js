const express = require('express');
// mores informations about router
const router = express.Router();

const welcome = require('../controllers/welcome');

router.get('/', welcome.getArticles);

module.exports = router;