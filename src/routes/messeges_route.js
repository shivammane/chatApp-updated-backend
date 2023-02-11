const router = require("express").Router();
const messeges = require("../controllers/messeges_controller");

router.post("/messeges", messeges);

module.exports = router;
