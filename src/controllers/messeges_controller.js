const mysql = require("./mysql_connector");

module.exports = (req, res) => {
    const data = req.body;
    const sql = `select * from messeges
    where (sender=${data.sender} or sender=${data.receiver}) and (receiver=${data.sender} or receiver=${data.receiver})
    ORDER BY messegeid`;
    mysql.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};
