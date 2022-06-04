module.exports = (sequelize, DataTypes) => {
  const commentTable = sequelize.define(
    "post",
    {
      id: {
        field: "id",
        type: DataTypes.NUMBER,
        primaryKey: true,
        autoIncrement: true,
      },
      postId: {
        field: "post_id",
        type: DataTypes.NUMBER,
      },
      name: {
        field: "name",
        type: DataTypes.STRING,
      },
      email: {
        field: "email",
        type: DataTypes.STRING,
      },
      body: {
        field: "body",
        type: DataTypes.STRING,
      },
    },
    {
      schema: "public",
      tableName: "comment",
      timestamps: false,
    }
  );
  return commentTable;
};
