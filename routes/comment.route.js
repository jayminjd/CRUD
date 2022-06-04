const express = require("express");
const router = express.Router();
const ctl = require("../controller/comment.controller");
router.get("/comment/:id", ctl.getComment);

router.post("/comment", ctl.createComment);

module.exports = router;
