const mysql = require("../controllers/mysql_connector");

module.exports = (req, res) => {
    const data = req.body;
    console.log(data);
    sql = `INSERT INTO users (firstname,lastname,email,password) VALUES ("${data.firstname}","${data.lastname}","${data.email}","${data.password}")`;
    mysql.query(sql, (err, result) => {
        if (err) {
            console.log(err);
            res.send("false");
            return;
        }
        res.send("true");
    });
};
