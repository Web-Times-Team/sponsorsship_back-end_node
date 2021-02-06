// parse application/json


exports.bodyParser = require('body-parser');
const dbType = require('./db/db-type');
const dbConfig = require('./db/config');
exports.cors = require('cors');
exports.dbCreationReturn = require('@web-times-team/db-handler').dbCreation(dbType, dbConfig);

exports.welcomeRoutes = require('./routes/welcome');
exports.newslettersRoutes = require('./routes/newsletters');