const mysql = require("../../controllers/mysql_connector");

module.exports = (socket) => {
    socket.on("socketid", (data) => {
        const sql = `UPDATE users SET connection_id = "${data.socketid}"
       where userid=${data.userid}`;
        mysql.query(sql, (err, result) => {
            if (err) throw err;
        });
    });
};
