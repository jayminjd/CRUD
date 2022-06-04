const express = require("express");
const app = express();
const db = require("./config");

app.use(express.json());

app.use("/", require("./routes/user.route"));
app.use("/", require("./routes/post.route"));
app.use("/", require("./routes/comment.route"));

app.listen(3000, () => {
  console.log("server running");
});
