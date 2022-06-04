const Sequelize = require("sequelize");
const db = {};
const DataTypes = require("sequelize");
const sequelize = new Sequelize("postgres", "postgres", "password", {
  host: "localhost",
  dialect: "postgres",
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.user = require("./entity/user.entity")(sequelize, DataTypes);
db.post = require("./entity/post.entity")(sequelize, DataTypes);
db.comment = require("./entity/comment.entity")(sequelize, DataTypes);

db.user.hasMany(db.post, {
  foreignKey: "user_id",
  sourceKey: "id",
});

db.post.hasMany(db.comment, {
  foreignKey: "post_id",
  sourceKey: "id",
});

db.post.hasOne(db.user, {
  foreignKey: "id",
  sourceKey: "userId",
});

db.comment.hasOne(db.post, {
  foreignKey: "id",
  sourceKey: "post_id",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = db;
