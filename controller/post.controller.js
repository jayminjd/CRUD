const axios = require("axios");
const db = require("../config");
const postModel = require("../models/post.model");
const { Op } = require("sequelize");

exports.findPost = async (req, res) => {
  let word = req.query.word;
  word = "%" + word + "%";

  const data = await db.post.findAll({
    where: {
      [Op.or]: {
        title: { [Op.like]: word },
        body: { [Op.like]: word },
      },
    },
  });
  res.status(200).send({
    data: data,
    message: "search api",
  });
};
exports.getPost = async (req, res) => {
  const id = req.params.id;
  const data = await db.post.findOne({
    include: [{ model: db.user }, { model: db.comment }],
    where: {
      id: id,
    },
  });
  res.status(200).send({
    data: data,
    message: "get api",
  });
};

exports.createPost = async (req, res) => {
  const reqData = await axios({
    url: "https://jsonplaceholder.typicode.com/posts",
    method: "get",
  });
  const resData = reqData.data;
  const mappedData = resData.map((e) => {
    return new postModel(e);
  });
  // return res.send(mappedData);
  mappedData.forEach((element) => {
    db.post.create(element);
  });
  // const data = await db.post.create(reqData);
  res.status(200).send({
    sucess: true,
    message: "POST api",
  });
};

exports.updatePost = async (req, res) => {
  const id = req.params.id;
  const reqData = req.body;
  const data = await db.post.update(reqData, {
    where: { id: id },
    returning: true,
    raw: true,
  });
  res.status(200).send({
    data: data,
    message: "update api",
  });
};
