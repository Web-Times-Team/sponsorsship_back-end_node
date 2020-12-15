/**
 * application configuration object
 * in production database host, user, password need to be pass, if not, server will not start
 */
const config = {};
config.mysql = {};
if (process.env.NODE_ENV === "production") {
    config.mysql.host = process.argv[2];
    config.mysql.user = process.argv[3];
    config.mysql.password = process.argv[4];
    config.mysql.database = process.argv[5];
} else {
    config.mysql.host = "localhost";
    config.mysql.user = "node";
    config.mysql.password = "nodeOneMany13";
    config.mysql.database = "one_to_many";
}
module.exports = config;