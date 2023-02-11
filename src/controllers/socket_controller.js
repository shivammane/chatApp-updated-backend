const socketid = require("./socket_controllers/socketid");
const messege = require("./socket_controllers/messege");

exports.socketid = (io) => {
    io.on("connection", (socket) => {
        socketid(socket);
        messege(socket, io);
    });
};
