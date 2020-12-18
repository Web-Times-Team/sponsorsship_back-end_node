/**
 * Database interfaces
 */
const dbType = require('./db-type')
const connection = require('./db-creation');
class Dbinterface {
    insertInTable(tableName, dataObj) {
        throw new Error('you have to implement the method doSomething')
    };
    getAllDataFromTable(tableName) {
        throw new Error('you have to implement the method doSomething')
    };
    getAllDataFromTableWhere(tableName, field, value) {
        throw new Error('you have to implement the method doSomething')
    };
    deleteData(tableName, field, value) {
        throw new Error('you have to implement the method doSomething')
    };
}

class MongoInterface extends Dbinterface {
    insertInTable(tableName, dataObj) {};
    getAllDataFromTable(tableName) {};
    getAllDataFromTableWhere(tableName, field, value) {};
    deleteData(tableName, field, value) {};
}
class MysqlInterface extends Dbinterface {
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

    getAllDataFromTableWhere(tableName, field, value) {
        return new Promise((resolve, reject) => {
            connection.query(`select * from ${tableName} where ${field} = ?`, [value[Object.keys(value)[0]]], (err, res) => {
                if (err) reject(err);
                resolve(res);
            })
        });
    };

    deleteData(tableName, field, value) {
        return new Promise((resolve, reject) => {
            connection.query(`delete from ${tableName} where ${field} = "${value[Object.keys(value)[0]]}"`, (err, res) => {
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
            console.log(this.dbInterface);
        }
    }
}

module.exports = new DbInstanciator();