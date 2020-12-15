const express = require('express');
// mores informations about router
const router = express.Router();

const contWelcome = require('../controllers/cont-welcome');
const contNewsletters = require('../controllers/cont-newsletters');

router.get('/', contWelcome.getArticles);
router.post('/news-letters', contNewsletters.postSubscriber);

module.exports = router;