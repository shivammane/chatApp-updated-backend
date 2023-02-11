const mysql = require("../../controllers/mysql_connector");

module.exports = (socket, io) => {
    socket.on("messege", (data) => {
        const sql = `INSERT INTO messeges (sender,messege,receiver) 
                        VALUES ("${data.userid}", "${data.messege}", "${data.receiverid}")`;
        if (data.receiverid != "" && data.messege != "\n") {
            mysql.query(sql, (err, result) => {
                if (err) throw err;

                mysql.query(
                    `select connection_id from users
                where userid=${data.receiverid}`,
                    (err, result) => {
                        if (err) throw err;
                        io.to(result[0].connection_id).emit("receivemsg", { userid: data.userid, messege: data.messege });
                    }
                );
            });
        }
    });
};
