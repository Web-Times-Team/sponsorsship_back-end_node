/**
 * 
 */
const { mysql } = require('../config-mysql');
const dbType = require('./db-type')
class Interface {
    insertInTable() { };
    getAllDataFromTable() { };
    deleteData(){};
}
class MongoInterface extends Interface {

}
class MysqlInterface extends Interface {

}

class DbInstanciator {
    constructor() {
        if (!dbType) {
           const mysqlInterface = new MysqlInterface();
            console.log(mysqlInterface);
        } else {
           const mongoInterface = new MongoInterface();
        }
    }
}

module.exports = DbInstanciator;