/**
 * database creation
 */
const bash = require('child_process');
const mysql = require('mysql');
const configMsql = require('../config-mysql');
const dbconfig = require('./config');

bash.exec('chmod u+x ./DB/creMySQLdb');

const creMySQLdb = bash.exec('./DB/creMySQLdb');

creMySQLdb.stdout.on('data', (data) => {
    console.log(data);
});

creMySQLdb.stderr.on('data', (data) => {
    console.log(data);
});

const connection = mysql.createConnection({
    host: configMsql.mysql.host,
    user: configMsql.mysql.user,
    password: configMsql.mysql.password
});

const createDataBase = () => {
    connection.query(`CREATE DATABASE IF NOT EXISTS ${dbconfig.dbName}`, (err, result) => {
        if (err) throw err;
        console.log("Database created");
        createTables();
    })
};
const createTables = () => {
    // create tables
    // it has enougth restrictions on table transaction, actually, one transaction can't have studentID, sponsorsID, donorID
    connection.query("use one_to_many", (err, result) => {
        if (err) throw err;
        console.log("one_to_many is used");


        dbconfig.dbTables.forEach((table) => {
            let describe = "";
            table.describe.forEach((val, index )=> {
                describe = `${describe} ${val.field} ${val.type} ${val.null} ${val.extra} ${index===(table.describe.length-1)?"":","}`
            });
            connection.query(`create table if not exists ${table.name}(
                ${describe}
        )` , (err, result) => {
                if (err) throw err;
                console.log(`${table.name} table is created`);
            });
        });
    });
}

connection.connect((err) => {
    if (err) throw err;
    console.log("Connected!");
    createDataBase();
})

module.exports = connection;