const router = require("express").Router();
const createNew = require("../controllers/createnew_controller");

router.post("/createNew", createNew);

module.exports = router;
