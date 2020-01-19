const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Admin123@',
    database: 'portal',
    multipleStatements: true,
    charset: 'utf8'
});
//Admin123@
module.exports = pool.promise();