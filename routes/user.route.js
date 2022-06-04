const express = require("express");
const router = express.Router();
const ctl = require("../controller/user.controller");
router.get("/user/:id", ctl.getUser);

router.post("/user", ctl.createUser);

router.delete("/user/:id", ctl.deleteUser);

router.put("/user/:id", ctl.updateUser);

module.exports = router;
