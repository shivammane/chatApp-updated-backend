const mysql = require("./mysql_connector");
const jwt = require("jsonwebtoken");

module.exports = (req, res) => {
    const data = req.body;
    mysql.query(
        `select concat(firstname,' ',lastname) as name,email,userid from users
    where email="${data.email}" and password="${data.password}"`,
        (err, result) => {
            if (err) throw err;
            if (result.length != 0) {
                const token = jwt.sign({ ...result }, process.env.JWT_SECRET_KEY);
                res.cookie("token", token).send(result);
            } else {
                res.send([{ email: "false" }]);
            }
        }
    );
};
