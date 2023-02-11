const mysql = require("./mysql_connector");

module.exports = (req, res) => {
    const data = req.body;
    mysql.query(
        `select concat(firstname,' ',lastname) as name,email,userid from users
    where email="${data.email}"`,
        (err, result) => {
            if (err) throw err;

            res.send(result);
        }
    );
};
