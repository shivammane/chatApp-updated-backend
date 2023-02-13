const router = require("express").Router();
const login = require("../controllers/login_controller");
const auth = require("../controllers/auth_controller");

router.post("/login", login);
router.get("/login", auth);

module.exports = router;
