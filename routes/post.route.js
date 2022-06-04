const express = require("express");
const router = express.Router();
const ctl = require("../controller/post.controller");
router.get("/post/:id", ctl.getPost);

router.get("/post", ctl.findPost);

router.post("/post", ctl.createPost);

router.put("/post/:id", ctl.updatePost);

module.exports = router;
