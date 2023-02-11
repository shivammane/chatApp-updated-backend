const router = require("express").Router();
const login_validator = require("../middleware/login_middleware");
const login = require("../controllers/login_controller");

router.post("/login", login_validator, login);

module.exports = router;
