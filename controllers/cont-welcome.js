const dbInstanciator = require('../db/db-instanciator')
const dbInterface = dbInstanciator.dbInterface;
exports.getArticles = (req, res) => {
    dbInterface.getAllDataFromTable('articles').then((result) => {
        res.json({
            articles: result
        });
    }).catch((err) => {
        res.status(503).send(err);
    });

}