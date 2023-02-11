const mysql = require("mysql");

const con = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE_NAME,
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = con;
