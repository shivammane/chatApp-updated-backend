const mysql = require("./mysql_connector");

module.exports = (req, res) => {
    const data = req.body;
    mysql.query(
        `select concat(firstname,' ',lastname) as name,email,userid from users
    where email="${data.email}" and password="${data.password}"`,
        (err, result) => {
            if (err) throw err;
            result.length != 0 ? res.send(result) : res.send([{ email: "false" }]);
        }
    );
};
