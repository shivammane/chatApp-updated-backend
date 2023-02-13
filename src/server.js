const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();
const http = require("http").createServer(app);
require("dotenv").config();
const io = require("socket.io")(http, {
    cors: {
        origin: process.env.CORS_ORIGIN_URL,
    },
});

const { socketid } = require("./controllers/socket_controller");

//routers
const login = require("./routes/login_route");
const createnew = require("./routes/createnew_route");
const users = require("./routes/users_route");
const messeges = require("./routes/messeges_route");
const PORT = process.env.PORT || 3000;

//built-in middlewares
app.use(cors({ origin: process.env.CORS_ORIGIN_URL, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//routes middlewares
app.use(login);
app.use(createnew);
app.use(users);
app.use(messeges);

//sockets
socketid(io);

//server listening
http.listen(PORT, () => {
    console.log(`Listening on port : ${PORT}`);
});
