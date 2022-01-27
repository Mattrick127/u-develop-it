const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    users: 'root',
    password: 'Rager666!',
    database: 'election'
});

module.exports = db;