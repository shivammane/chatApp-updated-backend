const mysql = require("../controllers/mysql_connector");
module.exports = (req, res, next) => {
    const data = req.body;
    mysql.query(
        `select count(*) as count from users
    where email="${data.email}" and password="${data.password}"`,
        (err, result) => {
            if (err) throw err;
            if (result[0].count != "0") {
                next();
                return;
            }
            res.send([{ email: "false" }]);
        }
    );
};
