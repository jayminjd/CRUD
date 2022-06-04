const axios = require("axios");
const db = require("../config");
const commentModel = require("../models/comment.model");
exports.getComment = async (req, res) => {
  const id = req.params.id;
  const data = await db.comment.findOne({
    // include: [{ model: db.post }],
    where: {
      id: id,
    },
  });
  res.status(200).send({
    data: data,
    message: "get api",
  });
};

exports.createComment = async (req, res) => {
  const reqData = await axios({
    url: "https://jsonplaceholder.typicode.com/comments",
    method: "get",
  });
  const resData = reqData.data;
  const mappedData = resData.map((e) => {
    return new commentModel(e);
  });
  // return res.send(mappedData);
  mappedData.forEach((element) => {
    db.comment.create(element);
  });
  res.status(200).send({
    sucess:true,
    message: "POST api",

  });
};
