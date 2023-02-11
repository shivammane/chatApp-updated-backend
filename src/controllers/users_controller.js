const mysql = require("./mysql_connector");

module.exports = (req, res) => {
    const data = req.body;
    sql = `select concat(firstname,' ',lastname) as name,email,userid from users
    where userid not in(${data.data})`;
    mysql.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};
