const router = require("express").Router();
const users = require("../controllers/users_controller");

router.post("/users", users);

module.exports = router;
