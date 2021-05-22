let mysql = require('mysql');

module.exports = function () {
    return connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: "luc@s99.com",
        database: 'apontamentos',
        port: '3306'
    });
}
