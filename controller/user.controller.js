const axios = require("axios");
const db = require("../config");
const userModel = require("../models/user.model");
exports.getUser = async (req, res) => {
  const id = req.params.id;
  const data = await db.user.findOne({
    include: [
      {
        model: db.post,
      },
    ],
    where: {
      id: id,
    },
  });
  res.status(200).send({
    data: data,
    message: "get api",
  });
};

exports.createUser = async (req, res) => {
  const reqData = await axios({
    url: "https://jsonplaceholder.typicode.com/users",
    method: "get",
  });
  const resData = reqData.data;
  const mappedData = resData.map((e) => {
    const reqModel = new userModel(e);
    return reqModel;
  });
  mappedData.forEach((element) => {
    db.user.create(element);
  });
  res.status(200).send({
    success: true,
    message: "POST api",
  });
};

exports.deleteUser = async (req, res) => {
  const id = req.params.id;
  const data = await db.user.destroy({
    where: { id: id },
  });
  res.status(200).send({
    data: data,
    message: "delete api",
  });
};

exports.updateUser = async (req, res) => {
  const id = req.params.id;
  const reqData = req.body;
  const data = await db.user.update(reqData, {
    where: { id: id },
    returning: true,
    raw: true,
  });
  res.status(200).send({
    data: data[1],
    message: "update api",
  });
};
