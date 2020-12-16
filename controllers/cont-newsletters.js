const dbInstanciator = require('../db/db-instanciator')
const dbInterface = dbInstanciator.dbInterface;
exports.postSubscriber = (req, res) => {

    dbInterface.insertInTable('subscribers', req.body).then((result) => {
        res.json({
            articles: result
        });
    }).catch((err) => {
        res.status(503).send(err);
    });
}