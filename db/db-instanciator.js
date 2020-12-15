/**
 * Database interfaces
 */
const dbType = require('./db-type')
const connection = require('./db-creation');

class MongoInterface {
    insertInTable() {

    };
    getAllDataFromTable() {};
    deleteData() {};
}
class MysqlInterface {
    insertInTable(tableName, dataObj) {
        return new Promise((resolve, reject) => {
            connection.query(`insert into ${tableName} set?`, dataObj, (err, res) => {
                if (err) reject(err);
                resolve(res);
            })
        });
    };

    getAllDataFromTable(tableName) {
        return new Promise((resolve, reject) => {
            connection.query(`select * from ${tableName}`, (err, res) => {
                if (err) reject(err);
                resolve(res);
            })
        });
    };

    deleteData(tableName, field, value) {
        return new Promise((resolve, reject) => {
            connection.query(`delete from ${tableName} where ${field} = "${value}"`, (err, res) => {
                if (err) reject(err);
                resolve(res);
            })
        });
    };
}

class DbInstanciator {

    constructor() {
        if (!dbType) {
            this.dbInterface = new MysqlInterface();
            console.log(this.dbInterface);
        } else {
            this.dbIinterface = new MongoInterface();
        }
    }
}

module.exports = DbInstanciator;