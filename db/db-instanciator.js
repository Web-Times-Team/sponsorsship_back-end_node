/**
 * Database interfaces
 */
const dbType = require('./db-type')
const connection = require('./db-creation');

class MongoInterface {
    insertInTable() {

    };
    getAllDataFromTable() { };
    deleteData() { };
}
class MysqlInterface {
    insertInTable(tableName, dataObj) {
        connection.query(`insert into ${tableName} set?`, dataObj, (err, res) => {
            if (err) return err;
            return res;
        })
    };
    getAllDataFromTable(tableName) {
        connection.query(`select * from ${tableName}`, (err, res) => {
            if (err) return err;
            return res;
        })
    };
    deleteData(tableName, field, value) {
        connection.query(`delete from ${tableName} where ${field} = "${value}"`, (err, res) => {
            if (err) return err;
            return res;
        })
    };
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